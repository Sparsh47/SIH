# -*- coding: utf-8 -*-
"""ss.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1LJfNnj1sRXjMqicj0Xded7MgP2gJ5GZd
"""

import  requests
import bs4
from bs4 import BeautifulSoup

def topic_file(topic:str):
  URL = "https://www.codecademy.com/resources/docs/"+topic
  r = requests.get(URL)
  soup = BeautifulSoup(r.content, 'html5lib')
  ti=soup.title.text

  s=soup.find('ul',class_='gamut-1f5vwd0-GridBox e13vpdv0')

  topics=[]
  for wrapper in s.find_all('li',class_='gamut-1xqixdn-Column e1pojw5l0'):
    topics.append(wrapper.text)

  return {"data":topics}

  ## List of questions
  #
  #
  ## List of common choices for all questions
  #choices = ["A) Done", "B) Not Done"]
  #
  ## List to store user responses
  #covered = []
  #notread=[]
  #
  ## Generate and display questions
  #for i, question in enumerate(topics):
  #    print(f"\nQuestion {i + 1}: {question}")
  #    for choice in choices:
  #        print(choice)
  #
  #    # Get user response
  #    while True:
  #        response = input("Enter your choice (A/B): ").strip().upper()
  #
  #        if response in ("A", "B"):
  #            if(response=="A"):
  #              covered.append(question)
  #            else:
  #              notread.append(question)
  #            break
  #        else:
  #            print("Invalid choice. Please enter A or B")
  #
  ## Display user responses
topic_file("c")