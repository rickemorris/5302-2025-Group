# React + Vite + Flask
To assist in connectivity install Vite to select the proper installation of React

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**Setup**

#Setting up vite with the following:
- npm install -g create-vite
- Project was named : Group Project
- Package name: group-project
- Framework : React
- Variant: Javascript

#After install finish the setup with
- cd "Group Project"
- npm install
- npm run dev

#Initial Test
- You can go to in your browser to confirm access:
- http://localhost:5173/

#Install Flask
- Our main web crawler that absorbs information from Houston SPCA we need python to run on the website. This is not natively possible with React. For this reason we will install flask to run as an API

- To accomplish this:


#Install Flask
- pip install flask

#Then install python-dotenv to help us with the python coding in our flask environment: 
- pip install python-dotenv

#Change folders to api
- mkdir api
- cd api/
-  python3 -m venv venv #To run the flask environment
- venv/Scripts/activate
- python test.py


- With the above you have both flask and React running ^^ importing this github repo will run the website fully
#The following are the requirements for this project
- ﻿beautifulsoup4==4.13.4
- blinker==1.9.0
- certifi==2025.1.31
- charset-normalizer==3.4.1
- click==8.1.8
- colorama==0.4.6
- Flask==3.1.0
- flask-cors==5.0.1
- idna==3.10
- itsdangerous==2.2.0
- Jinja2==3.1.6
- MarkupSafe==3.0.2
- requests==2.32.3
- soupsieve==2.6
- typing_extensions==4.13.2
- urllib3==2.4.0
- Werkzeug==3.1.3



