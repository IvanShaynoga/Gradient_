from django.contrib import admin
from django.utils.safestring import mark_safe

from actors.models import Actor, ActorImage


@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    """Актёр"""
    fieldsets = (
         (None, {'fields': ('name', 'last_name', 'url', 'pub_date', 'male',
                            'age',
                            'town', 'height', 'body', 'hair_col', 'hair_long',
                            'eyes_col', 'person', 'education', 'language',
                            'roles', 'roles_teatre', 'skills', 'main_image',
                            'images', 'video', 'prewiew', 'shoe',
                            'dress', 'measurement', 'enable')}),
     )
    prepopulated_fields = {'url': ('name', 'last_name', )}
    readonly_fields = ['prewiew']

    def prewiew(self, obj):
        return mark_safe(f'<img src="{obj.main_image.url}">')

    filter_horizontal = ('images',)
    ordering = ('pub_date',)
    search_fields = ('last_name', 'name',)
    list_display = ('last_name', 'name', 'pub_date')


@admin.register(ActorImage)
class ActorImageAdmin(admin.ModelAdmin):
    readonly_fields = ['prewiew']
    ordering = ('last_name',)
    search_fields = ('last_name',)

    def prewiew(self, obj):
        return mark_safe(f'<img src="{obj.images.url}">')

    class Meta:
        model = ActorImage
