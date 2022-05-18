from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData),
    path('add/', views.addData),
    path('edit/<int:id>', views.editData),
    path('delete/<int:id>', views.deleteData),
]
