import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

import {
  Box,
  Typography,
  Card,
  CardActions,
  Button,
  CardContent,
  CardMedia,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import Rating from "@mui/material/Rating";

import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
// import RecordPagePDF from './RecordPagePdf'; // Stellen Sie sicher, dass der Pfad korrekt ist
import styles from "./a4.module.css";

const supabaseUrl = "https://qbdzfatkmhkvmutgjayw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZHpmYXRrbWhrdm11dGdqYXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3MzYxNjUsImV4cCI6MjAwNDMxMjE2NX0.4Q5YSOKzrhAKGF-aA76eukhJY88I8i5sC6lQ31VqbnI";

const supabase = createClient(supabaseUrl, supabaseKey);

const RecordPage = () => {
  const { id } = useParams();
  const [recordData, setRecordData] = useState(null);

  useEffect(() => {
    fetchRecordData();
  }, []);

  const fetchRecordData = async () => {
    try {
      const { data, error } = await supabase
        .from("resume_table")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching record data:", error);
      } else {
        setRecordData(data);
      }
    } catch (error) {
      console.error("Error fetching record data:", error);
    }
  };

  if (!recordData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container a4-page">
      <Box sx={{ px: 2 }} className="page-container">
        <Box>
          <Box sx={{ px: 2 }} className="page-container"></Box>
        </Box>

        <Box>
          <Box display={'flex'}>

            <Box display={"60%"}>
              <Typography gutterBottom variant="h2" component="div">
                {recordData.vorname} {recordData.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recordData.geburtsdatum} | {recordData.geburtsort}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <HomeIcon />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  {recordData.strasse}, {recordData.plz} {recordData.ort}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AlternateEmailIcon />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  {recordData.email}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocalPhoneIcon />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  {recordData.telefon}
                </Typography>
              </Box>
            </Box>
            <Box display={"30%"}>

              <Box
                component="img"
                
                sx={{
                  height: 375,
                  width: 273,
                }}
                alt="The house from the offer."
                src="https://images.cakeresume.com/jRaE7/shaqayeq-sadri/ff80d972-d4ed-49a3-951b-fa2c8f376078.jpg"
              />
            </Box>
          </Box>

          <Box sx={{ px: 2 }}></Box>
          <Typography
            variant="h2"
            sx={{ fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}
          >
            Lebenslauf
          </Typography>
          <Box sx={{ marginBottom: "1rem" }}>
            {/* <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                Vorname: {recordData.vorname}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                Geburtsname: {recordData.geburtsname}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                Strasse: {recordData.strasse}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                PLZ: {recordData.plz}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                Ort: {recordData.ort}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                <LocalPhoneIcon /> {recordData.telefon}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                Geburtsdatum: {recordData.geburtsdatum}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                Geburtsort: {recordData.geburtsort}
              </Typography> */}
            <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
              Staatsangehoerigkeit: {recordData.staatsangehoerigkeit}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
              Einreisedatum Deutschland: {recordData.einreisedatumDeutschland}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
              SprachKenntnisse: {recordData.sprachKenntnisse}
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: "3.3rem",
              color: "blueviolet",
              marginBottom: "0.5rem",
            }}
          >
            Schulbildungen:
          </Typography>
          <Rating name="customized-10" defaultValue={2} max={10} />
          {recordData.schulbildungen.map((schulbildung, index) => {
            const { von, bis, artUndOrt } = JSON.parse(schulbildung);
            return (
              <Box
                key={index}
                sx={{
                  marginBottom: "1rem",
                  borderBottom: "1px solid #ccc",
                  padding: "1rem",
                }}
              >
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Von: {von}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Bis: {bis}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Schulname: {artUndOrt}
                </Typography>
              </Box>
            );
          })}
          <Typography
            variant="h3"
            sx={{
              fontSize: "3.3rem",
              color: "blueviolet",
              marginBottom: "0.5rem",
            }}
          >
            Berufsausbildungen:
          </Typography>
          {recordData.berufsausbildungen.map((berufsausbildung, index) => {
            const {
              schulName,
              schulOrt,
              schulBesuchVon,
              schulBesuchBis,
              berufsbezeichnung,
            } = JSON.parse(berufsausbildung);
            return (
              <Box
                key={index}
                sx={{
                  marginBottom: "1rem",
                  borderBottom: "1px solid #ccc",
                  padding: "1rem",
                }}
              >
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Schulname: {schulName}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Schulort: {schulOrt}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Schulbesuch Von: {schulBesuchVon}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Schulbesuch bis: {schulBesuchBis}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Berufsbezeichnung: {berufsbezeichnung}
                </Typography>
              </Box>
            );
          })}
          <Typography
            variant="h3"
            sx={{
              fontSize: "3.3rem",
              color: "blueviolet",
              marginBottom: "0.5rem",
            }}
          >
            Berufstätigkeiten:
          </Typography>
          {recordData.berufstatigkeiten.map((berufstatigkeit, index) => {
            const {
              berufsVon,
              berufsBis,
              berufsArt,
              arbeitsStelleUndOrtUndLand,
            } = JSON.parse(berufstatigkeit);
            return (
              <Box
                key={index}
                sx={{
                  marginBottom: "1rem",
                  borderBottom: "1px solid #ccc",
                  padding: "1rem",
                }}
              >
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Berufs von: {berufsVon}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Berufs bis: {berufsBis}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Berufsart: {berufsArt}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Arbeitsstelle und Ort und Land: {arbeitsStelleUndOrtUndLand}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default RecordPage;
