import React from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();

  // Dummy data object with more detailed information
  const projectDetails = {
    1: {
      title: "Project's Title" ,
      focus: "Project Launching",
      projectTime: "2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non porttitor ante. Mauris nec dictum risus, sed placerat arcu. Vivamus tellus odio, vulputate vel ante eget, cursus pharetra turpis. Fusce vel elit auctor, pellentesque erat nec, venenatis dui. Integer a quam vitae lacus placerat laoreet. Aenean iaculis lectus a molestie luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et nulla facilisis, varius nunc in, scelerisque urna. Donec bibendum pretium elit interdum luctus. Praesent vitae enim ut nulla pulvinar tincidunt sed nec dui. In gravida sem lorem, eu sagittis lacus sagittis et. Ut mollis sollicitudin cursus. Praesent faucibus nibh vitae condimentum pretium. Etiam gravida efficitur lacus, eu efficitur est eleifend in.",
      mainImage: require('../img/projectdetail/project1.png'),
      galleryImages: [
        require('../img/projectdetail/project1.png'),
        require('../img/projectdetail/project1.png'),
        require('../img/projectdetail/project1.png'),
        require('../img/projectdetail/project1.png'),

        require('../img/projectdetail/project1.png'),

      ],
    },
    2: {
        title: "Project's Title",
        focus: "Project Launching",
        projectTime: "2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non porttitor ante. Mauris nec dictum risus, sed placerat arcu. Vivamus tellus odio, vulputate vel ante eget, cursus pharetra turpis. Fusce vel elit auctor, pellentesque erat nec, venenatis dui. Integer a quam vitae lacus placerat laoreet. Aenean iaculis lectus a molestie luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et nulla facilisis, varius nunc in, scelerisque urna. Donec bibendum pretium elit interdum luctus. Praesent vitae enim ut nulla pulvinar tincidunt sed nec dui. In gravida sem lorem, eu sagittis lacus sagittis et. Ut mollis sollicitudin cursus. Praesent faucibus nibh vitae condimentum pretium. Etiam gravida efficitur lacus, eu efficitur est eleifend in.",
        mainImage: require('../img/projectdetail/project2.png'),
        galleryImages: [
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
  
          require('../img/projectdetail/project1.png'),
  
        ],
      },
      3: {
        title: "Project's Title",
        focus: "Project Launching",
        projectTime: "2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non porttitor ante. Mauris nec dictum risus, sed placerat arcu. Vivamus tellus odio, vulputate vel ante eget, cursus pharetra turpis. Fusce vel elit auctor, pellentesque erat nec, venenatis dui. Integer a quam vitae lacus placerat laoreet. Aenean iaculis lectus a molestie luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et nulla facilisis, varius nunc in, scelerisque urna. Donec bibendum pretium elit interdum luctus. Praesent vitae enim ut nulla pulvinar tincidunt sed nec dui. In gravida sem lorem, eu sagittis lacus sagittis et. Ut mollis sollicitudin cursus. Praesent faucibus nibh vitae condimentum pretium. Etiam gravida efficitur lacus, eu efficitur est eleifend in.",
        mainImage: require('../img/projectdetail/project3.png'),
        galleryImages: [
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
  
          require('../img/projectdetail/project1.png'),
  
        ],
      },
      4: {
        title: "Project's Title",
        focus: "Project Launching",
        projectTime: "2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non porttitor ante. Mauris nec dictum risus, sed placerat arcu. Vivamus tellus odio, vulputate vel ante eget, cursus pharetra turpis. Fusce vel elit auctor, pellentesque erat nec, venenatis dui. Integer a quam vitae lacus placerat laoreet. Aenean iaculis lectus a molestie luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et nulla facilisis, varius nunc in, scelerisque urna. Donec bibendum pretium elit interdum luctus. Praesent vitae enim ut nulla pulvinar tincidunt sed nec dui. In gravida sem lorem, eu sagittis lacus sagittis et. Ut mollis sollicitudin cursus. Praesent faucibus nibh vitae condimentum pretium. Etiam gravida efficitur lacus, eu efficitur est eleifend in.",
        mainImage: require('../img/projectdetail/project4.png'),
        galleryImages: [
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
  
          require('../img/projectdetail/project1.png'),
  
        ],
      },
      5: {
        title: "Project's Title",
        focus: "Project Launching",
        projectTime: "2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non porttitor ante. Mauris nec dictum risus, sed placerat arcu. Vivamus tellus odio, vulputate vel ante eget, cursus pharetra turpis. Fusce vel elit auctor, pellentesque erat nec, venenatis dui. Integer a quam vitae lacus placerat laoreet. Aenean iaculis lectus a molestie luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et nulla facilisis, varius nunc in, scelerisque urna. Donec bibendum pretium elit interdum luctus. Praesent vitae enim ut nulla pulvinar tincidunt sed nec dui. In gravida sem lorem, eu sagittis lacus sagittis et. Ut mollis sollicitudin cursus. Praesent faucibus nibh vitae condimentum pretium. Etiam gravida efficitur lacus, eu efficitur est eleifend in.",
        mainImage: require('../img/projectdetail/project5.png'),
        galleryImages: [
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
  
          require('../img/projectdetail/project1.png'),
  
        ],
        
      },
      6: {
        title: "Project's Title",
        focus: "Project Launching",
        projectTime: "2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non porttitor ante. Mauris nec dictum risus, sed placerat arcu. Vivamus tellus odio, vulputate vel ante eget, cursus pharetra turpis. Fusce vel elit auctor, pellentesque erat nec, venenatis dui. Integer a quam vitae lacus placerat laoreet. Aenean iaculis lectus a molestie luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et nulla facilisis, varius nunc in, scelerisque urna. Donec bibendum pretium elit interdum luctus. Praesent vitae enim ut nulla pulvinar tincidunt sed nec dui. In gravida sem lorem, eu sagittis lacus sagittis et. Ut mollis sollicitudin cursus. Praesent faucibus nibh vitae condimentum pretium. Etiam gravida efficitur lacus, eu efficitur est eleifend in.",
        mainImage: require('../img/projectdetail/project6.png'),
        galleryImages: [
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/projectdetail/project1.png'),
  
          require('../img/projectdetail/project1.png'),
  
        ],
        
      },
    // ... add details for other projects
  };

  const project = projectDetails[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <div className='project-detail-wrapper'>
        <div className="project-detail-content">
          <div className="project-image">
            <img src={project.mainImage} alt={project.title} />
            <div className="project-meta">
              <div className='project-launch'>
                <strong>Focus</strong>
                <p>{project.focus}</p>
              </div>
              <div>
                <strong>Project Time</strong>
                <p>{project.projectTime}</p>
              </div>
            </div>
          </div>
          <div className="project-info">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
           
            <div className="project-gallery-details">
              {project.galleryImages.map((image, index) => (
                <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
