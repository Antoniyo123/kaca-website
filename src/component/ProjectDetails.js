import React from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();

  // Dummy data object with more detailed information
  const projectDetails = {
    1: {
      title: "VIVO",
      focus: "Product Launching",
      projectTime: "2023",
      description:{
        paragraph1: "Selected as one of the creator for VIVO V19, Nazla has positioned herself as a creative influencer, leveraging the cutting-edge capabilities of th newly unveiled VIVO V19 to enhance her content creation endeavors. Through her dynamic portrayal,she not only showcases the device's innovative features but also demonstrates how they empower her in crafting compelling digital content.",
        paragraph2: "Working closely with the VIVO team, Nazla created a series of engaging content that highlighted the V19's key features, particularly its advanced camera system and innovative selfie capabilities. Her authentic approach to content creation resonated strongly with her audience, effectively communicating the device's value proposition while maintaining her signature style and creative vision."
      },
      mainImage: require('../img/projects/aqsavivo.png'),
      galleryImages: [
        require('../img/vivo/vivo1.png'),
        require('../img/vivo/vivo2.png'),
        require('../img/vivo/vivo3.png'),
        require('../img/projectdetail/project1.png'),

      ],
    },
    2: {
        title: "Lazada",
        focus: "Product Launching",
        projectTime: "2023",
        description: {
          paragraph1:"Amidst the electrifying Lazada Fest 12.12 event, Agatha was honored to join forces with For Skin's Sake, while Aaliyah teamed up with Dear Me Beauty for their popular Hypergloss Lip Balm.",
          paragraph2:"Through their unique presence,they embraced the opportunity to be the ambassadors of this innovative product. Spreadingthe message of joy and confidence that it brings to those who use it."
        },
        mainImage: require('../img/lazada/lazmain.png'),
        galleryImages: [
          require('../img/lazada/laz1.png'),
          require('../img/lazada/laz2.png'),
          require('../img/lazada/laz3.png'),
  
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
      5: {
        title: "SteveMadden",
        focus: "Exclusive Partnership",
        projectTime: "2023",
        description:{
          paragraph1: "Nazla gain a trust from Steve Madden Indonesia to become their mini BA for 3 months. With her astounding taste in fashion as long as her unlimited positive spirit, It successfully attracted Steve Madden to choose her as their BA."
        } ,
        mainImage: require('../img/stevemadden/steve1.png'),
        galleryImages: [
          require('../img/stevemadden/steve2.png'),
          require('../img/projectdetail/project1.png'),
          require('../img/stevemadden/steve2.png'),

          require('../img/projectdetail/project1.png'),
  
          require('../img/projectdetail/project1.png'),
  
        ],
      },
      6: {
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
      4: {
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
            <div className="project-description">
              <p className="mb-4">{project.description.paragraph1}</p>
              <p>{project.description.paragraph2}</p>
            </div>
           
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
