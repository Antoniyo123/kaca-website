import React from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();

  // Dummy data object with more detailed information
  const projectDetails = {
    1: {
      title: "VIVO",
      titleImage: require('../img/brandimg/vivo.png'),
      focus: "Product Launching",
      projectTime: "2023",
      description:{
        paragraph1: "Selected as one of the creator for VIVO V19, Nazla has positioned herself as a creative influencer, leveraging the cutting-edge capabilities of th newly unveiled VIVO V19 to enhance her content creation endeavors. Through her dynamic portrayal,she not only showcases the device's innovative features but also demonstrates how they empower her in crafting compelling digital content.",
        paragraph2: "Working closely with the VIVO team, Nazla created a series of engaging content that highlighted the V19's key features, particularly its advanced camera system and innovative selfie capabilities. Her authentic approach to content creation resonated strongly with her audience, effectively communicating the device's value proposition while maintaining her signature style and creative vision."
      },
      // mainImage: require('../img/projects/aqsavivo.png'),
      mainVideo: require('../video/VIVO AAL FINAL.mp4'),
      galleryImages: [
        require('../img/vivo/vivo1.png'),
        require('../img/vivo/vivo2.png'),
        require('../img/vivo/vivo3.png'),
        require('../img/projectdetail/project1.png'),

      ],
    },
    2: {
        title: "Fibemini",
      titleImage: require('../img/brandimg/fibemini-removebg-preview.png'),

        focus: "Brand Ambassador",
        projectTime: "2021-2022",
        description: {
          paragraph1:"Amidst the electrifying Lazada Fest 12.12 event, Agatha was honored to join forces with For Skin's Sake, while Aaliyah teamed up with Dear Me Beauty for their popular Hypergloss Lip Balm.",
          paragraph2:"Through their unique presence,they embraced the opportunity to be the ambassadors of this innovative product. Spreadingthe message of joy and confidence that it brings to those who use it."
        },
      mainVideo: require('../video/NAZLA FIBEMINI.mp4'),
        mainImage: require('../img/lazada/lazmain.png'),
        galleryImages: [
          require('../img/fibemini/fibemini1.png'),
          require('../img/fibemini/fibemini2.png'),
          require('../img/fibemini/fibemini3.png'),
  
          // require('../img/projectdetail/project1.png'),
  
        ],
      },
      3: {
      titleImage: require('../img/brandimg/lazada.png'),
      title: "LAZADA",
        focus: "Project Launching",
        projectTime: "2023",
        description: {
          paragraph1:"Amidst the electrifying Lazada Fest 12.12 event, Agatha was honored to join forces with For Skin’s Sake, while Aaliyah teamed up with Dear Me Beauty for their popular Hypergloss Lip Balm",
          paragraph2:"Through their unique presence, they embraced the opportunity to be the ambassadors of this innovative product. Spreading the message of joy and confidence that it brings to those who use it.",
        },
      mainVideo: require('../video/LAZADA AALIYAH.mp4'),
      mainImage: require('../img/projectdetail/project3.png'),
        galleryImages: [
          require('../img/lazada/laz1.png'),
          require('../img/lazada/laz2.png'),
          require('../img/lazada/laz3.png'),  
  
        ],
      },
      5: {
      titleImage: require('../img/brandimg/stevemadden.png'),
        title: "SteveMadden",
        focus: "Exclusive Partnership",
        projectTime: "2023",
        description:{
          paragraph1: "Nazla gain a trust from Steve Madden Indonesia to become their mini BA for 3 months. With her astounding taste in fashion as long as her unlimited positive spirit, It successfully attracted Steve Madden to choose her as their BA."
        } ,
      mainVideo: require('../video/STEVE MADEN NAZLA.mp4'),
        mainImage: require('../img/stevemadden/steve1.png'),
        galleryImages: [
          require('../img/stevemadden/Stevemadden1.png'),
          require('../img/stevemadden/stevemadden2.png'),
          require('../img/stevemadden/steve2.png'),
          

          // require('../img/projectdetail/project1.png'),
  
          // require('../img/projectdetail/project1.png'),
  
        ],
      },
      6: {
      titleImage: require('../img/brandimg/puma.png'),
      title: "PUMA",
        focus: "Product Launching",
        projectTime: "2022",
        description: {
          paragraph1:"For the launch of their newest collaboration with AMI Paris; PUMA created a group photoshoot campaign. Nazla, Aqsa, & Ranggaz has been chosen to support this campaign by involved on the photoshoot.",
          paragraph2:"The tree of them, seamlessly completed each other, elevating the campaign to the new heights. Through their engaging presence, they effectively showcased the brand’s appeal to the youthful and fashion-forward."
        },
      mainVideo: require('../video/PUMA PRICIL.mp4'),
        mainImage: require('../img/projectdetail/project5.png'),
        galleryImages: [
          require('../img/puma/puma1.png'),
          require('../img/puma/puma2.png'),
          require('../img/puma/puma3.png'),
          require('../img/puma/puma4.png'),
  
        ],
        
      },
      4: {
        title: "Johny Walker",
      titleImage: require('../img/brandimg/jw.png'),

        focus: "Project Launching",
        projectTime: "2023",
        description:{
          paragraph1: "Nazla is chosen as one of the KOLs for the exclusive partnership with Johnnie Walker.",
          paragraph2: "She is supporting Johnnie Walker for their black label series; as she is involved in a multiple of Event & activities that they executed during this ongoing exclusive partnership."
        } ,
      mainVideo: require('../video/JOHNNIE WALKER NZL.mp4'),
      mainImage: require('../img/projectdetail/project6.png'),
        galleryImages: [
          require('../img/johny walker/johny1.png'),
          require('../img/johny walker/johny2.png'),
          require('../img/johny walker/johny3.png'),
  
        ],
        
      },
      7: {
      titleImage: require('../img/brandimg/toyota.png'),
        title: "Mitsubishi",
        focus: "Product Positioning",
        projectTime: "2024",
        description:{
          paragraph1: "Partnered with Mitsubishi, Agatha reflects how the car mirrors her own identity, highlighting its exceptional features that resonate with her personal preferences.",
          paragraph2: "Through her digital platforms, she shares the qualities of the vehicle that captivate her, inviting her followers to discover the same value."
        } ,
      mainVideo: require('../video/MITSUBISHI 2 PRICIL.mp4'),
      mainImage: require('../img/projectdetail/project6.png'),
        galleryImages: [
          require('../img/mitsubishi/mitsubishi1.png'),
          require('../img/mitsubishi/mitsubishi2.png'),
          require('../img/mitsubishi/mitsubishi2.png'),
  
        ],
        
      },
      9: {
      titleImage: require('../img/brandimg/samsung.png'),
      title: "Samsung",
        focus: "Product Launching",
        projectTime: "2023",
        description:{
          paragraph1: "Selected as one of the creator for Samsung, Nazla has positioned herself as a creative influencer, leveraging the cutting-edge capabilities of the newly unveiled Samsung Galaxy S24 to enhance her content creation endeavors.",
          paragraph2: "Through her dynamic portrayal, she not only showcases the device's innovative features but also demonstrates how they empower her in crafting compelling digital content."
        } ,
      mainVideo: require('../video/event samsung_2.mp4'),
      mainImage: require('../img/projectdetail/project6.png'),
        galleryImages: [
          require('../img/samsung/samsung1.png'),
          require('../img/samsung/samsung2.png'),
          require('../img/samsung/samusng3.png'),
  
        ],
        
      },
      8: {
      titleImage: require('../img/brandimg/lv.png'),
      title: "LV",
        focus: "Product Positioning & Photo Production",
        projectTime: "2021",
        description:{
          paragraph1: "Our 5 talents have been chosen by Louis Vuitton to collaborate and become their Indonesia representatives for the Arclight 2.0 global campaign. This campaign also highlighting other products including Louis Vuitton Twist & Dauphine bag & Louis Vuitton Tambour Watch.",
         
        } ,
      mainVideo: require('../video/LV RACHEL THERESIA.mp4'),
      mainImage: require('../img/projectdetail/project6.png'),
        galleryImages: [
          require('../img/lv/lv1.png'),
          require('../img/lv/lv2.png'),
          require('../img/lv/lv3.png'),
  
        ],
        
      },
      10: {
      titleImage: require('../img/brandimg/dior copy.png'),
      title: "DIOR",
        focus: "Product Positioning",
        projectTime: "2024",
        description:{
          paragraph1: "Nazla Alifa embodies the In her portrayal, she’s not elegance and sophistication only embodies the inherent synonymous with DIOR, allure of DIOR, but also effortlessly reflecting the effortlessly incorporates the brand’s essence through her brand’s style into her own unique sense of style and persona, thereby elevating its grace.",
         
        } ,
      mainVideo: require('../video/DIOR NAZLA.mp4'),
      mainImage: require('../img/projectdetail/project6.png'),
        galleryImages: [
          require('../img/dior/dior1.png'),
          require('../img/dior/dior2.png'),
          require('../img/dior/dior3.png'),
  
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
          <div className="project-image">{project.mainVideo ? (
              <video 
              src={project.mainVideo} 
             
              autoPlay 
              muted
              loop 
              className="main-video"
              alt={project.title}
            />
            ) : (
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="main-media"
              />
            )}
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
                        {/* <div className="project-title-image">
              <img 
                src={project.titleImage} 
                alt={project.title} 
                className="title-image"
              />
            </div> */}
            <div className="project-description">
              <p className="mb-8">{project.description.paragraph1}</p>
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
