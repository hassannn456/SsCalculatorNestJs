import React from "react";
import { Box } from "@mui/material";
import HeroImageSection from "./../../../components/general/heroImageSection";
import Image from "/assets/pngs/webdevelopment.avif";
import OurWorkDescription from "./../../../components/work/details/OurWorkDescription";
import AboutDescription from "./../../../components/services/AboutDescription";
import TechnologyBar from "./../../../components/work/details/TechnologyBar";
import ProjectDetailData from "../ProjectDetailData";
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
