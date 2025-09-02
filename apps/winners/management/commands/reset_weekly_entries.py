from django.core.management.base import BaseCommand
from apps.entries.models import Entry

class Command(BaseCommand):
    help = 'Reset weekly entries (use with caution)'

    def add_arguments(self, parser):
        parser.add_argument(
            '--confirm',
            action='store_true',
            help='Confirm that you want to reset entries',
        )

    def handle(self, *args, **options):
        if not options['confirm']:
            self.stdout.write(
                self.style.WARNING(
                    'This command will reset all entries. '
                    'Use --confirm to proceed.'
                )
            )
            return
        
        # Reset all entries
        Entry.objects.update(is_selected=False)
        
        self.stdout.write(
            self.style.SUCCESS('Successfully reset all entries.')
        )
