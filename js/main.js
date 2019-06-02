import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Sync your Dropbox files to AWS S3",
    'href': "Sync-DBfiles-to-s3.pdf",
    'desc': "Dropbox files to S3 for free.",
    'image': {
      'desc': "Sync your Dropbox to AWS S3",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Create Dynamic website using AWS",
    'href': "http://jostapan-mysfits.s3-website-us-east-1.amazonaws.com/",
    'desc': "By using different AWS components such as AWS Lambda, Faragate, ECS, DynamoDB, Cognito etc. I created a dynamic website where user can register, login and view the webite and filter it.",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': ""
    }
  },
  {
    'title': "Make Portfolio using AWS services",
    'href': "https://portfolio.tapanjo.info",
    'desc': "This portfolio is compeletly serverless. Here we made use of Codebuild & CodePipeline which will get triggered when new code in pushed via github. After the portfolio is deployed successfully, I will get an email where it will confirm wheather portfolio deployment has filed or succeeed.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
