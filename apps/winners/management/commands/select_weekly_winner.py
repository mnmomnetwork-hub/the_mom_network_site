from django.core.management.base import BaseCommand
from django.utils import timezone
from apps.entries.models import Entry
from apps.winners.models import WeeklyWinner
from apps.donations.models import Donation
import random

class Command(BaseCommand):
    help = 'Select a weekly winner from approved entries'

    def handle(self, *args, **options):
        # Get approved entries that haven't been selected yet
        eligible_entries = Entry.objects.filter(
            is_approved=True,
            is_selected=False
        )
        
        if not eligible_entries.exists():
            self.stdout.write(
                self.style.WARNING('No eligible entries found.')
            )
            return
        
        # Select random winner
        winner_entry = random.choice(eligible_entries)
        
        # Calculate total donations for this week
        week_start = timezone.now().date() - timezone.timedelta(days=7)
        week_donations = Donation.objects.filter(
            created_at__date__gte=week_start,
            payment_status='succeeded'
        )
        total_amount = sum(d.amount for d in week_donations)
        
        # Create winner record
        winner = WeeklyWinner.objects.create(
            winner_name=winner_entry.full_name,
            winner_email=winner_entry.email,
            city=winner_entry.city,
            state=winner_entry.state,
            family_size=winner_entry.family_size,
            children_ages=winner_entry.children_ages,
            amount_received=total_amount,
            week_ending=timezone.now().date(),
            story_summary=winner_entry.current_situation[:500] + "..." if len(winner_entry.current_situation) > 500 else winner_entry.current_situation
        )
        
        # Mark entry as selected
        winner_entry.is_selected = True
        winner_entry.save()
        
        self.stdout.write(
            self.style.SUCCESS(
                f'Successfully selected {winner.winner_name} as this week\'s winner! '
                f'Amount: ${total_amount}'
            )
        )
