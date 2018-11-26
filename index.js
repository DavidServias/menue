const items = {
  scales: {
    title:"Scales",
    details:["Hands alone",
             "One octave", 
             "Major, Harmonic Minor, and Melodic Minor", 
             "Correct notes and fingering"],
    showDetails:false
  },
  inversions: {
    title:"Chord Inversions",
    details:["Hands alone",
             "Majors and minors (starting on white notes)", 
             "Correct notes and fingering"],
    showDetails:false
  },
  rhody: {
    title:"Go Tell Aunt Rhody",
    details:["Be able to play in any key",
             "That includes black keys"],
    showDetails:false
  },
  sonatina: {
    title:"Sonatina",
    details:["Complete piece, including parts 1 and 2, and coda", 
             "As notated on the last page of your packet",
             "Correct notes, rhythms, and fingering", 
             "With dynamics"],
    showDetails:false
  },
  greensleeves: {
    title:"Greensleeves",
    details:["Right hand plays the melody",
             "Left hand plays chords", 
             "Steady, singable tempo", 
             "Left hand broken chords optional"],
    showDetails:false
  },
  seventhChords: {
    title: "7th Chords",
    details:["Correct notes is top priority", 
             "Major 7ths, Major-Minor 7ths, Minor 7ths, Half-Diminished 7ths, and Full-Diminished 7ths",
             "Any fingering is allowed", 
             "May be shared between two hands"],
    showDetails:false
  },
  sightReading: {
    title: "More Melody With Chords",
    details:["Be ready to play any of the examples", 
             "Correct melody notes", 
             "Correct left hand chords"],
    showDetails:false
  }
};
const itemStyle = {
  margin:"0 auto 5px auto",
  width:"90%",
  textIndent:"10px",
  backgroundColor:"black",
  color:"white"
};
const appStyle = {
  width:"60%",
  backgroundColor:"white",
  textIndent:"10px",
  margin:"0 auto 5px auto",
  fontFamily:"sans-serif",
  paddingBottom:"25px",
  border:"15px black solid"
}
const vm=new Vue({
  el:"#app",
  data:{
    menuTitle:"MUS 171 Final Jury",
    subTitle:"Please be prepared to perform the following:",
    appStyle:appStyle,
    itemStyle:itemStyle,
    items:items  
  },
  methods: {
    toggleDetails:function(item) {
      item.showDetails=!item.showDetails;
    }
  }
});