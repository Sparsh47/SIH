# -*- coding: utf-8 -*-
"""fetching content.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1ae9sSMF-RI-fHeWfcBeExMolz9oU6kP7
"""

import os
import googleapiclient.discovery


def video_data(incrrct):
  
  video_title:str
  video_URL:str
  ######################Belowe code to find incrrct questions#########################
  search=[]
  for line in incrrct:
    n=len(line)
    search.append(line[slice(25,n)])


  #############################below code to find the video related to wrong questions################
  import os
  import googleapiclient.discovery

  # Set your API key
  api_key = "AIzaSyDYlm7uBfn18vOjsjYszgfDUe7-u05oIpo"

  # Initialize the YouTube Data API client
  youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

  # Function to search for videos by a topic and return video details
  def search_videos_by_topic(topic, max_results=5):
      search_response = youtube.search().list(
          q=topic,
          type="video",
          part="id,snippet",
          maxResults=max_results
      ).execute()

      videos = []

      for search_result in search_response.get("items", []):
          video_id = search_result["id"]["videoId"]
          video_title = search_result["snippet"]["title"]
          video_url = f"https://www.youtube.com/watch?v={video_id}"
          videos.append({"title": video_title, "url": video_url})

      return videos

  # List of topics to search for
  #topics = ["Python programming", "Machine learning", "Data visualization", "Web development"]

  # Maximum number of videos to fetch for each topic
  max_results_per_topic = 3

  # Fetch videos for each topic and print the results
  print(f"Top videos you should learn according to your quiz results:")
  for topic in search:
      videos = search_videos_by_topic(topic, max_results_per_topic)


      if videos:

          for i, video in enumerate(videos, start=1):
              video_title=video['title']
              video_URL=video['url']
              print(f"{i}. Title: {video['title']}")
              print(f"   URL: {video['url']}\n")





  # written=input("If you want to join and participate in discussion forums related to your topic of study enter Y else enter N " )
  # if(written=='Y'):
  #   import requests
  #   # Define the API endpoint and parameters
  #   api_url = "https://api.stackexchange.com/2.2/search/advanced"
  #   params = {
  #       "site": "stackoverflow",  # Specify the Stack Overflow site
  #       "order": "desc",          # Sort order (you can change this)
  #       "sort": "relevance",      # Sort by relevance
  #       "pagesize": 5,            # Number of results per page (you can change this)
  #   }

  # # Prompt the user for the topic they want to search
  #   topic = input("Enter a topic you want to join on forum or read on it ")
  #   params["q"] = topic  # Set the search query parameter

  #   try:
  #     # Send a GET request to the Stack Overflow API
  #       response = requests.get(api_url, params=params)

  #     # Check if the request was successful (HTTP status code 200)
  #       if response.status_code == 200:
  #           data = response.json()

  #         # Extract and display the questions
  #           for item in data["items"]:
  #               print(f"Title: {item['title']}")
  #               print(f"Link: {item['link']}\n")
  #       else:
  #           print(f"Error: {response.status_code}")
  #   except requests.exceptions.RequestException as e:
  #       print(f"Request error: {e}")

  return {video_title:video_URL}