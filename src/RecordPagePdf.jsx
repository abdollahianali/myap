import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const RecordPagePDF = ({ recordData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text> {recordData.vorname}</Text>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        <Text> {recordData.name}</Text>
        {/* Fügen Sie weitere Informationen hinzu */}
        
<p>Ich bin eine engagierte und vielseitige Fachkraft im Bereich der Zahnmedizin, mit fundiertem Wissen und umfangreicher praktischer Erfahrung. Mein breites Interessensspektrum umfasst nicht nur die Zahnmedizin, sondern auch Kindergymnastik, Yoga und Ballett. Meine Leidenschaft f&uuml;r das Lernen treibt mich stets an, neue F&auml;higkeiten zu erwerben und mich pers&ouml;nlich weiterzuentwickeln.</p>

<p>
	<br/>
</p>

<table>
	<tbody>
		<tr>
			<td ><span  ><span >&nbsp;</span></span> Scherafati Stra&szlig;e 58, Deh-Vanak, Tehran, Iran
				<br/>
			</td>
		</tr>
		<tr>
			<td ><span  ><span >&nbsp;</span></span> shaqayeq.sadri@gmail.com
				<br/>
			</td>
		</tr>
		<tr>
			<td ><span ><span >&nbsp;</span></span> +989197606829
				<br/>
			</td>
		</tr>
	</tbody>
</table>

  

      </View>
    </Page>
  </Document>
);

export default RecordPagePDF;
