# Generated by Django 5.0.6 on 2024-06-01 10:56

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kural', '0003_alter_thirukkural_couplet'),
    ]

    operations = [
        migrations.RenameField(
            model_name='thirukkural',
            old_name='meaning',
            new_name='couplet_en',
        ),
        migrations.RemoveField(
            model_name='thirukkural',
            name='couplet',
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='chapter',
            field=models.CharField(default='Unknown Chapter', max_length=100),
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='chapter_en',
            field=models.CharField(default='Unknown Chapter', max_length=100),
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='chapter_group',
            field=models.CharField(default='Unknown Chapter Group', max_length=100),
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='chapter_group_en',
            field=models.CharField(default='Unknown Chapter Group', max_length=100),
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='chapter_group_tang',
            field=models.CharField(default='Unknown Chapter Group', max_length=100),
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='chapter_tang',
            field=models.CharField(default='Unknown Chapter', max_length=100),
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='couplet_tamil',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='meaning_en',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='meaning_tamil',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='section',
            field=models.CharField(default='Unknown Section', max_length=100),
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='section_en',
            field=models.CharField(default='Unknown Section', max_length=100),
        ),
        migrations.AddField(
            model_name='thirukkural',
            name='section_tang',
            field=models.CharField(default='Unknown Section', max_length=100),
        ),
    ]
