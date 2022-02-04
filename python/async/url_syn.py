import requests, time 
from urls import websites

urls=websites.split("\n")
# print(urls)
num=len(urls)
start=time.time()
for i in urls:
    print(f"get data from {i}")
    r=requests.get(i)
    # print(r)
end=time.time()

print(f"{end - start} to get {num} url")