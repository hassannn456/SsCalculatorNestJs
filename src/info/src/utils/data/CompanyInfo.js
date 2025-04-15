import { DateTime } from "luxon";

const convertToCST = (timeInPakistan, sourceTimeZone, targetTimeZone) => {
  const [startTime, endTime] = timeInPakistan.split(" - ");

  const convertTime = (time) => {
    const dateTimeInPKT = DateTime.fromFormat(time, "h:mma", {
      zone: sourceTimeZone,
    });

    const dateTimeInCST = dateTimeInPKT.setZone(targetTimeZone);
    return dateTimeInCST.toFormat("h:mma");
  };

  const convertedStartTime = convertTime(startTime);
  const convertedEndTime = convertTime(endTime);

  return `${convertedStartTime} - ${convertedEndTime}`;
};

const companyDetails = {
  companyName: "Techietribe",
  ownerName: "Hassan Chaudhary",
  officialEmail: "info@thetechietribe.com",
  socialMedia: {
    facebook: "https://www.facebook.com/thetechietribe.official",
    pinterest: "https://www.pinterest.com/thetechietribe_/",
    instagram: "https://www.instagram.com/thetechietribe_/",
    linkedin: "https://www.linkedin.com/company/techietribe/",
    youtube: "https://www.youtube.com/@thetechietribe.official",
  },
  address: "12828 Willow Centre Dr Ste D # 363 Houston TX 77066",
  googleMapAddress: "https://maps.app.goo.gl/wULHeS3w8Mykr8af8",
  phoneNumber: "+12513732325",
  phoneNumberDisplay: "(251) 373-2325",
  workingTime: convertToCST(
    "6:00pm - 4:00am",
    "Asia/Karachi",
    "America/Chicago"
  ),
  workingDays: "Monday to Friday",
};

export default companyDetails;
