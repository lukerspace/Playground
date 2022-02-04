
import os,sys, requests,tweepy,config,re
from tkinter.ttk import Style
import pandas as pd
import numpy as np
import psycopg2, psycopg2.extras
import plotly.graph_objects as go
from textblob import TextBlob
import matplotlib.pyplot as plt

# twitter
auth = tweepy.OAuthHandler(config.TWITTER_CONSUMER_KEY, config.TWITTER_CONSUMER_SECRET)
auth.set_access_token(config.TWITTER_ACCESS_TOKEN, config.TWITTER_ACCESS_TOKEN_SECRET)
tweepy_obj = tweepy.API(auth)

# function 
# clean text function
def textnormalize(text):
    text=re.sub(r'@[A-Za-z0-9]+','',text)
    text=re.sub(r'#','',text)
    text=re.sub(r'RT[\s]+','',text)
    text=re.sub(r'https?:\/\/\S+','',text)
    return text
# get subjectivity
def subjectivity(text):
    return TextBlob(text).sentiment.subjectivity
# get polarity
def polarity(text):
    return TextBlob(text).sentiment.polarity
def getanalysis(score):
    if score> 0:
        return "Positive"
    if score==0:
        return "Neutral"
    else:
        return "Negative"


# Tweet content
tweets_collector=[]
for id in config.TWITTER_CRYPTO:
    c=tweepy.Cursor(tweepy_obj.user_timeline,id=id,tweet_mode='extended').items(300)
    for tweet in c:
        tweets_collector.append(tweet.full_text)

# Dataframe for sentimental analysis
df=pd.DataFrame([post for post in tweets_collector ],columns=["tweet"])
df['tweet']=df['tweet'].apply(textnormalize)
df['subjectivity']=df['tweet'].apply(subjectivity)
df['polarity']=df['tweet'].apply(polarity)
df['Analysis']=df['polarity'].apply(getanalysis)

print(df)

plt.figure(figsize=(8,6))
for i in range(0,df.shape[0]):
    plt.scatter(df['polarity'][i],df['subjectivity'][i],color="Blue")

plt.title("sentiment")
plt.xlabel("polarity")
plt.ylabel("subjectivity")

plt.grid()
plt.show()