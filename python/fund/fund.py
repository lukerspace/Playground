import threading,requests,re,config
import pandas as pd
import numpy as np
from bs4 import BeautifulSoup
from datetime import date, datetime
import os,sys,smtplib
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart


COMMASPACE = ', '

def fund_crawler():
    head = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    sheet=pd.read_csv("fund_url.csv" , encoding="big5")
    sheet_len=len(sheet)
    fund=[]

    #fund url fetch
    for index in range(sheet_len):
        fund.append(sheet["INFO"][index])

    #array
    name=[]
    dt=[]
    nav=[]
    delta=[]

    #fetch url
    for i in fund:
        url=i
        page = requests.get(url,headers = head)
        soup = BeautifulSoup(page.text, "html.parser")
        
        info_price=soup.find_all("td",class_="t3n1")
        info_delta=soup.find_all("td",class_="t3n1_rev")
        info_date=soup.find_all("td",class_="t3n0c1")
        info_title=soup.find_all("td",class_="t100")

        for title in info_title:
            name.append(title.text)
            
        for day in info_date[1:2]:
            dt.append(day.text)

        for price in info_price[0:1]:
            nav.append(float((price.text).replace(",","")))
            
        for change in info_delta[0:1]:
            delta.append(float(change.text.replace(",","")))
            
    # df
    timestamp=date.today()
    t=str(timestamp).replace("-","_")
    col=["Name","Date","Price","Prev"]
    df=pd.DataFrame(list(zip(name,dt,nav,delta)),columns=col)
    df["Delta"]= df["Price"]-df["Prev"]
    df["% Change"]= (df["Delta"]/df["Prev"])*100
    df=df.sort_values(by=["% Change"],ascending=False)

    df.to_csv("fund"+t+".csv",encoding="big5")
    return ""


def email_sender():
    sender = "lukerspace@gmail.com"
    gmail_password = config.PASSWORD
    recipients = ["lukerspace@gmail.com"]
    timestamp=date.today()
    t=str(timestamp).replace("-","_")
    
    # 建立郵件主題
    outer = MIMEMultipart()
    outer['Subject'] = '基金每日淨值報價'+t
    outer['To'] = COMMASPACE.join(recipients)
    outer['From'] = sender
    outer.preamble = 'You will not see this in a MIME-aware mail reader.\n'

    # 檔案位置 在windows底下記得要加上r 如下 要完整的路徑
    attachments = ['fund'+t+'.csv']

    # 加入檔案到MAIL底下
    for file in attachments:
        try:
            with open(file, 'rb') as fp:
                print ('can read file & success !!!')
                msg = MIMEBase('application', "octet-stream")
                msg.set_payload(fp.read())
            encoders.encode_base64(msg)
            msg.add_header('Content-Disposition', 'attachment', filename=os.path.basename(file))
            outer.attach(msg)
        except:
            print("Unable to open one of the attachments. Error: ", sys.exc_info()[0])
            raise

    composed = outer.as_string()

    # 寄送EMAIL
    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as s:
            s.ehlo()
            s.starttls()
            s.ehlo()
            s.login(sender, gmail_password)
            s.sendmail(sender, recipients, composed)
            s.close()
        print("Email sent!")
    except:
        print("Unable to send the email. Error: ", sys.exc_info()[0])
        raise

if __name__ == '__main__':
    fund_crawler()
    email_sender()
    
