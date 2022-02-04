import flask 
from flask import *
import requests

# ##1.
# base="http://127.0.0.1:5000/"
# r=requests.get(base+"video/kobe/24")
# print(r.json())

# ##2.
# base="http://127.0.0.1:5000/"
# r=requests.get(base+"video/james")
# print(r.json())

# ##3.
# base="http://127.0.0.1:5000/"
# r=requests.put(base+"video/1",{"likes":10})
# print(r.json())

# ##4
# base="http://127.0.0.1:5000/"
# r=requests.put(base+"video/1",{"likes":10,"name":"kobe","views":10000})
# print(r.json())
# input()
# base="http://127.0.0.1:5000/"
# r=requests.get(base+"video/1")
# print(r.json())

# ##5
# base="http://127.0.0.1:5000/"
# r=requests.put(base+"video/1",{"likes":10,"name":"kobe","views":10000})
# print(r.json())
# input()
# base="http://127.0.0.1:5000/"
# r=requests.get(base+"video/1")
# print(r.json())

# ##6
# base="http://127.0.0.1:5000/"
# data=[
#     {"likes":1011,"name":"kobe","views":10000},
#     {"likes":1033,"name":"james","views":10000},
#     {"likes":1015,"name":"kd","views":10000},
#     {"likes":1031,"name":"curry","views":10000},
#     {"likes":1022,"name":"giannis","views":10000}]

# for i in range(len(data)):
#   r=requests.put(base+"video/"+str(i),data[i])
#   print(r.json())  
# input()
# r=requests.delete(base+"video/0")
# print(r)  # delte already
# input()
# r=requests.get(base+"video/2")
# print(r.json())

# ##7.
# base="http://127.0.0.1:5000/"
# data=[
#     {"likes":1011,"name":"kobe","views":10000},
#     {"likes":1033,"name":"james","views":10000},
#     {"likes":1015,"name":"kd","views":10000},
#     {"likes":1031,"name":"curry","views":10000},
#     {"likes":1022,"name":"giannis","views":10000}]

# for i in range(len(data)):
#   r=requests.put(base+"video/"+str(i),data[i])
#   print(r.json())  
# input()
# r=requests.get(base+"video/2")
# print(r.json())


### 8
base="http://127.0.0.1:5000/"
# data=[
#     {"likes":1011,"name":"kobe","views":10000},
#     {"likes":1033,"name":"james","views":10000},
#     {"likes":1015,"name":"kd","views":10000},
#     {"likes":1031,"name":"curry","views":10000},
#     {"likes":1022,"name":"giannis","views":10000}]
r=requests.patch(base+"video/2", {"likes":9,"views":5})
print(r.json())