'use strict';

angular.module('jakesResumeTemplateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.resumeObject = {
      contact: {
        name: "Jake Lingwall",
        phone: "801-919-4921",
        email: "Jake.Lingwall@gmail.com",
        twitter: "twitter.com/jakelingwall",
        linkedin: "linkedin.com/in/jakelingwall/",
        personal: "JakeNotJacob.com"
      },
      experience: [
        {
          company: "Domo",
          imageUrl: "//media.licdn.com/media/p/2/000/0d6/08e/320fe1c.png",
          position: "Software Engineer",
          startDate: "05/2013",
          endDate: null,
          bullets: [
                      "Front-End Developer on Domo's web application using Angular, Backbone, git, SASS, d3, HTML5, Jquery, pusher, RESTful services, lodash and other popular libaries.",
                      "Large Application of 100,000's of code we maintain by utilizing grunt, require, testing and specific best practices in code organization.",
                      "Actively involved in establishing culture by managing training meetings, organizing employee onboarding, owning presentations and fighting for productivity."
                   ]
        },
        {
          company: "Domo",
          imageUrl: "//media.licdn.com/media/p/2/000/0d6/08e/320fe1c.png",
          position: "Visualization Team Member",
          startDate: "08/2012",
          endDate: "05/2013",
          bullets: [
                      "Worked directly with executives to connect MySql, MongoDB, SOQL (SFDC), Excel data to the Domo platform and to visualize that data in a meaningful way.",
                      "Participated heavily in successful recruiting efforts for interns and full-time engineers."
                   ]
        },
        {
          company: "Pariveda Solutions",
          imageUrl: "//pbs.twimg.com/profile_images/1576838745/pariveda-color-stacked_reasonably_small_bigger.jpg",
          position: "Consultant",
          startDate: "05/2012",
          endDate: "08/2012",
          bullets: [
                      "MicroStrategy Business Intelligence Dashboard which allowed JC Penney Executives to view and interact with data on their mobile devices.",
                      "Dimensional Database Design and implementation using Microsoft SQL Server.",
                      "Mobile Web Application to import purchases from email and track them visually. The Knockout.js, jqPlot, Jquery Front-End interacted with a normalized relational database through Microsoft Azure."
                   ]
        }
      ],
      education: [
        {
          company: "Master's for Information Systems Management",
          imageUrl: "//media.licdn.com/mpr/mpr/shrink_60_60/p/8/005/049/0cc/07a34a6.png",
          position: "Master's of Information Systems Management",
          startDate: "01/2010",
          endDate: "04/2013",
          bullets: [
                      "Completed 5 year Bachelor's/Master's program in 3 years.",
                      "Co-President of the Association for Information Systems. During year presidency I hosted international conference, recruited 2 new sponsoring organizations, created program mentorship program and raised membership by 20%.",
                   ]
        }
      ],
      projects: [
        {
          company: "Owner",
          imageUrl: "//pbs.twimg.com/profile_images/438055296695414784/2Z_B9ERJ_bigger.png",
          position: "Gold Watch",
          startDate: "01/2014",
          endDate: null,
          bullets: [
                      "Full-Stack Javascript Application to give employees a bigger voice while allowing employers to better engage and retain talent."
                   ]
        },
        {
          company: "Ivory Consulting",
          imageUrl: "//media.licdn.com/media/p/1/000/021/0e8/21ba055.png",
          position: "Web Prototype",
          startDate: "09/2013",
          endDate: "10/2013",
          bullets: [
                      "Ivory Consulting is the leader in lease software. I spent 80 hours building a fully functional, full-stack web prototype for their primary product Super Trump."
                   ]
        }
      ]
    }
  });
