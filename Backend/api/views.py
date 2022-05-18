from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from cardio.models import Data
from .serializers import DataSerializer


@api_view(['GET'])
def getData(request):
    allData = Data.objects.all()
    serializer = DataSerializer(allData, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def addData(request):
    serializer = DataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def editData(request, id):
    try:
        data = Data.objects.get(pk=id)
    except Data.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = DataSerializer(data, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteData(request, id):
    try:
        data = Data.objects.get(pk=id)
    except Data.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    data.delete()
    return Response(status=status.HTTP_200_OK)
