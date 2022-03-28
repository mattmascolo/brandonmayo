import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AudioPlayer from 'material-ui-audio-player';
import { useState } from 'react';

const listOfSongs = [
    {
        name: 'Behelit',
        src: '/songs/Behelit.mp3',
    },
    {
        name: 'Black Spot',
        src: '/songs/BlackSpot.mp3',
    },
    {
        name: 'Gatsu',
        src: '/songs/Gatsu.mp3',
    }
]

const useStyles = makeStyles((theme) => {
    return {
      root: {
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      },
      loopIcon: {
        color: '#3f51b5',
        '&.selected': {
          color: '#0921a9',
        },
        '&:hover': {
          color: '#7986cb',
        },
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
      playIcon: {
        color: '#f50057',
        '&:hover': {
          color: '#ff4081',
        },
      },
      replayIcon: {
        color: '#e6e600',
      },
      pauseIcon: {
        color: '#0099ff',
      },
      volumeIcon: {
        color: 'rgba(0, 0, 0, 0.54)',
      },
      volumeSlider: {
        color: 'black',
      },
      progressTime: {
        color: 'rgba(0, 0, 0, 0.54)',
      },
      mainSlider: {
        color: '#3f51b5',
        '& .MuiSlider-rail': {
          color: '#7986cb',
        },
        '& .MuiSlider-track': {
          color: '#3f51b5',
        },
        '& .MuiSlider-thumb': {
          color: '#303f9f',
        },
      },
    };
  });


function App() {
    const [playingSong, setPlayingSong] = useState('/songs/Behelit.mp3');

    function setCurrentSong(song) {
        setPlayingSong(song);
    }

  return (
    <div className="App">
        <div className='container mx-auto my-8'>
                <AudioPlayer
                    elevation={1}
                    width="100%"
                    variation="default"
                    spacing={3}
                    download={true}
                    autoplay={true}
                    order="standart"
                    preload="auto"
                    loop={true}
                    src={playingSong}
                    useStyles={useStyles}
                />
        </div>
        <div className='container mx-auto my-8'>
            <List component="nav" aria-label="secondary mailbox folders">
                {listOfSongs.map((song, index) => {
                    <div>
                        <ListItem button onClick={() => setCurrentSong(song.src)} key={index}>
                            <ListItemText primary={song.name} />
                        </ListItem>
                    </div>
                })}
                <ListItem button onClick={() => {
                                            setCurrentSong('/songs/Behelit.mp3');
                                        }}>
                    <ListItemText primary="Behelit" />
                </ListItem>
                <ListItem button onClick={() => {
                                            setCurrentSong('/songs/BlackSpot.mp3');
                                        }}>
                    <ListItemText primary="Black Spot" />
                </ListItem>
                <ListItem button onClick={() => {
                                            setCurrentSong('/songs/Gatsu.mp3');
                                        }}>
                    <ListItemText primary="Gatsu" />
                </ListItem>
            </List>
        </div>

    </div>
  );
}

export default App;
