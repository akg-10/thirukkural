# Generated by Django 5.0.6 on 2024-06-03 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kural', '0004_rename_meaning_thirukkural_couplet_en_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='thirukkural',
            old_name='couplet_tamil',
            new_name='couplet_tamil1',
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='couplet_tamil2',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]