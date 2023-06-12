from django.conf import settings
#from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', views.index, name='index'),
    path('actors', views.index, name='index'),
    path('actor/<str:id>', views.index_attr, name='index'),
    path('actress', views.index, name='index'),
    path('contacts', views.index, name='index'),
    re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'main.views.page_not_found'


#  <Route index element={<HomePage />} />
#         <Route path="actors" element={<ActorsPage />} />
#         <Route path="actor/:id" element={<OneActorPage />} />
#         <Route path="actress" element={<ActressPage />} />
#         <Route path="contacts" element={<ContactsPage />} />