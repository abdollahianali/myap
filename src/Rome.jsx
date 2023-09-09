import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, Grid, Typography , InputLabel, Divider} from '@mui/material';
import './FormStyles.css'; // Import the CSS file
import { green } from '@mui/material/colors';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    vorname: '',
    geburtsname: '',
    strasse: '',
    plz: '',
    ort: '',
    telefon: '',
    geburtsdatum: '',
    geburtsort: '',
    staatsangehoerigkeit: '',
    einreisedatumDeutschland: '',
    sprachKenntnisse: '',
    schulbildungen: [],
    berufsausbildungen: [],
    berufstatigkeiten: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSchulbildungChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedSchulbildungen = [...prevData.schulbildungen];
      updatedSchulbildungen[index][field] = value;
      return {
        ...prevData,
        schulbildungen: updatedSchulbildungen,
      };
    });
  };

  const handleAddSchulbildung = () => {
    setFormData((prevData) => ({
      ...prevData,
      schulbildungen: [...prevData.schulbildungen, { von: '', bis: '', artUndOrt: '' }],
    }));
  };

  const handleBerufsausbildungChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedBerufsausbildungen = [...prevData.berufsausbildungen];
      updatedBerufsausbildungen[index][field] = value;
      return {
        ...prevData,
        berufsausbildungen: updatedBerufsausbildungen,
      };
    });
  };

  const handleAddBerufsausbildung = () => {
    setFormData((prevData) => ({
      ...prevData,
      berufsausbildungen: [
        ...prevData.berufsausbildungen,
        { schulName: '', schulOrt: '', schulBesuchVon: '', schulBesuchBis: '', berufsbezeichnung: '' },
      ],
    }));
  };

  const handleBerufstatigkeitChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedBerufstatigkeiten = [...prevData.berufstatigkeiten];
      updatedBerufstatigkeiten[index][field] = value;
      return {
        ...prevData,
        berufstatigkeiten: updatedBerufstatigkeiten,
      };
    });
  };

  const handleAddBerufstatigkeit = () => {
    setFormData((prevData) => ({
      ...prevData,
      berufstatigkeiten: [
        ...prevData.berufstatigkeiten,
        { berufsVon: '', berufsBis: '', berufsArt: '', arbeitsStelleUndOrtUndLand: '' },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
       
    

      <div>
        <InputLabel>Name:</InputLabel>
        <TextField className="text-input" id="standard-basic" variant="outlined"  name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <InputLabel>Vorname:</InputLabel>
        <TextField id="standard-basic" variant="outlined"  name="vorname" value={formData.vorname} onChange={handleInputChange} />
      </div>
      <div>
        <InputLabel>Geburtsname:</InputLabel>
        <TextField id="standard-basic" variant="outlined"  name="geburtsname" value={formData.geburtsname} onChange={handleInputChange} />
      </div>
      <div>
        <InputLabel>Straße, Nr:</InputLabel>
        <TextField id="standard-basic" variant="outlined"  name="strasse" value={formData.strasse} onChange={handleInputChange} />
      </div>
      <div>
        <InputLabel>PLZ, Ort:</InputLabel>
        <TextField id="standard-basic" variant="outlined"  name="plz" value={formData.plz} onChange={handleInputChange} />
        <TextField id="standard-basic" variant="outlined"  name="ort" value={formData.ort} onChange={handleInputChange} />
      </div>
      <div>
        <InputLabel>Telefon:</InputLabel>
        <TextField id="standard-basic" variant="outlined"  name="telefon" value={formData.telefon} onChange={handleInputChange} />
      </div>
      <div>
        <InputLabel>Geburtsdatum:</InputLabel>
        <TextField id="standard-basic" variant="outlined"  name="geburtsdatum" value={formData.geburtsdatum} onChange={handleInputChange} />
      </div>
      <div>
        <InputLabel>Geburtsort:</InputLabel>
        <TextField id="standard-basic" variant="outlined"  name="geburtsort" value={formData.geburtsort} onChange={handleInputChange} />
      </div>
      <div>
        <InputLabel>Staatsangehoerigkeit:</InputLabel>
        <TextField id="standard-basic" variant="outlined" 
          type="text"
          name="staatsangehoerigkeit"
          value={formData.staatsangehoerigkeit}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <InputLabel>EinreisedatumDeutschland:</InputLabel>
        <TextField id="standard-basic" variant="outlined" 
          type="text"
          name="einreisedatumDeutschland"
          value={formData.einreisedatumDeutschland}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <InputLabel>SprachKenntnisse:</InputLabel>
        <TextField id="standard-basic" variant="outlined"  name="sprachKenntnisse" value={formData.sprachKenntnisse} onChange={handleInputChange}/>
      </div>
 

      <div>
        <InputLabel>Schulbildungen:</InputLabel>
        {formData.schulbildungen.map((schulbildung, index) => (
          <div sx={{background:"blue !important"}} key={index}>
            <Divider sx={{color:"blue" ,marginTop: "14px" , marginBottom: "14px"}}>Schule{`${index+1}`}</Divider>
            <InputLabel>Von:</InputLabel>
           <TextField id="standard-basic" variant="outlined" 
              type="text"
              value={schulbildung.von}
              onChange={(e) => handleSchulbildungChange(index, 'von', e.target.value)}
            />
            <InputLabel>Bis:</InputLabel>
           <TextField id="standard-basic" variant="outlined" 
              type="text"
              value={schulbildung.bis}
              onChange={(e) => handleSchulbildungChange(index, 'bis', e.target.value)}
            />
            <InputLabel>Art und Ort der besuchten Schule (n)</InputLabel>
            <TextField id="standard-basic" variant="outlined" 
              type="text"
              value={schulbildung.artUndOrt}
              onChange={(e) => handleSchulbildungChange(index, 'artUndOrt', e.target.value)}
            />
            
          </div>
          
        ))}
        <Button variant="contained" type="Button" onClick={handleAddSchulbildung}>
          +
        </Button>
      </div>
      
      <div>
        <InputLabel>Berufsausbildungen:</InputLabel>
        {formData.berufsausbildungen.map((berufsausbildung, index) => (
          <div key={index}>
            <Divider sx={{color:"blue" ,marginTop: "14px" , marginBottom: "14px"}}>Ausbildung{`${index+1}`}</Divider>
            <div>
              <InputLabel>Schulname:</InputLabel>
              <TextField id="standard-basic" variant="outlined" 
                type="text"
                value={berufsausbildung.schulName}
                onChange={(e) => handleBerufsausbildungChange(index, 'schulName', e.target.value)}
              />
            </div>
            <div>
              <InputLabel>Schulort:</InputLabel>
              <TextField id="standard-basic" variant="outlined" 
                type="text"
                value={berufsausbildung.schulOrt}
                onChange={(e) => handleBerufsausbildungChange(index, 'schulOrt', e.target.value)}
              />
            </div>
            <div>
              <InputLabel>Schulbesuch von:</InputLabel>
              <TextField id="standard-basic" variant="outlined" 
                type="text"
                value={berufsausbildung.schulBesuchVon}
                onChange={(e) => handleBerufsausbildungChange(index, 'schulBesuchVon', e.target.value)}
              />
            </div>
            <div>
              <InputLabel>Schulbesuch bis:</InputLabel>
              <TextField id="standard-basic" variant="outlined" 
                type="text"
                value={berufsausbildung.schulBesuchBis}
                onChange={(e) => handleBerufsausbildungChange(index, 'schulBesuchBis', e.target.value)}
              />
            </div>
            <div>
              <InputLabel>Berufsbezeichnung:</InputLabel>
              <TextField id="standard-basic" variant="outlined" 
                type="text"
                value={berufsausbildung.berufsbezeichnung}
                onChange={(e) => handleBerufsausbildungChange(index, 'berufsbezeichnung', e.target.value)}
              />
            </div>
          </div>
        ))}
        <Button variant="contained" type="Button" onClick={handleAddBerufsausbildung}>
          +
        </Button>
      </div>
      <div>
        <InputLabel>Berufstätigkeiten:</InputLabel>
        {formData.berufstatigkeiten.map((berufstatigkeit, index) => (
          <div key={index}>
             <Divider sx={{color:"blue" ,marginTop: "14px" , marginBottom: "14px"}}>Tätigkeit{`${index+1}`}</Divider>
            <div>
              
              <InputLabel>Berufs von:</InputLabel>
              <TextField id="standard-basic" variant="outlined" 
                type="text"
                value={berufstatigkeit.berufsVon}
                onChange={(e) => handleBerufstatigkeitChange(index, 'berufsVon', e.target.value)}
              />
            </div>
            <div>
              <InputLabel>Berufs bis:</InputLabel>
             <TextField id="standard-basic" variant="outlined" 
                type="text"
                value={berufstatigkeit.berufsBis}
                onChange={(e) => handleBerufstatigkeitChange(index, 'berufsBis', e.target.value)}
              />
            </div>
            <div>
              <InputLabel>Berufsart:</InputLabel>
              <TextField id="standard-basic" variant="outlined" 
                type="text"
                value={berufstatigkeit.berufsArt}
                onChange={(e) => handleBerufstatigkeitChange(index, 'berufsArt', e.target.value)}
              />
            </div>
            <div>
              <InputLabel>Arbeitsstelle und Ort und Land:</InputLabel>
              <TextField
                type="text"
                value={berufstatigkeit.arbeitsStelleUndOrtUndLand}
                onChange={(e) => handleBerufstatigkeitChange(index, 'arbeitsStelleUndOrtUndLand', e.target.value)}
              />
            </div>
          </div>
        ))}
        <Button sx={{marginTop:2}} variant="contained" type="button" onClick={handleAddBerufstatigkeit}>
          +
        </Button>
      </div>
      <Button sx={{marginTop:2, width:"30%", background: "green"}} variant="contained" type="submit">Submit</Button>
    </form>
  );
};

export default Form;
