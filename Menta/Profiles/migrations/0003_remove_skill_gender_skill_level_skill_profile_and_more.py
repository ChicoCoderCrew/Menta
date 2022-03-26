# Generated by Django 4.0.2 on 2022-03-26 19:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Profiles', '0002_alter_profile_website_skill'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='skill',
            name='gender',
        ),
        migrations.AddField(
            model_name='skill',
            name='level',
            field=models.CharField(choices=[('B', 'Beginner'), ('I', 'Intermediate'), ('E', 'Expert')], default='B', max_length=100, verbose_name='Proficiency'),
        ),
        migrations.AddField(
            model_name='skill',
            name='profile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Profiles.profile'),
        ),
        migrations.AlterField(
            model_name='skill',
            name='skillName',
            field=models.CharField(max_length=100, verbose_name='Skill'),
        ),
    ]
