import React from "react";
import { Box } from "@mui/material";
import HeroImageSection from "../utils/commons/heroImageSection";
import Image from "/assets/images/webdevelopment.avif";
import OurWorkDescription from "../components/ourWork/details/OurWorkDescription";
import TechnologyBar from "../components/ourWork/details/TechnologyBar";
import ProjectDetailData from "../utils/data/ProjectDetails";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const { id, name } = useParams();

  const filterdata = ProjectDetailData.filter(
    (item) => item.id === parseInt(id)
  );

  return (
    <Box>
      <HeroImageSection title={name} imageSrc={Image} />
      <OurWorkDescription
        logo={filterdata[0].LogoPath}
        description={filterdata[0].description}
        double={true}
        industry={filterdata[0].industry}
        platformType={filterdata[0].platformType}
      />

      <TechnologyBar images={filterdata[0].technologies} />
      <OurWorkDescription
        logo={filterdata[0].LogoPath}
        description={filterdata[0].overview}
        reverse={true}
      />
    </Box>
  );
};

export default ProjectDetailPage;
