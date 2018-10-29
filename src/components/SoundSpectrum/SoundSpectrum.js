import React, { Component } from 'react';
import AudioSpectrum from 'react-audio-spectrum';
import sample from './sample.mp3';
import './SoundSpectrum.css'

export default class SoundSpectrum extends Component {
    render() {
        return (
            <div className='test'>
                <div>
                    <audio type="audio/mp3" ref="audio_tag" src={sample} id="audio-element" controls autoPlay/>

                </div>
                   
                <AudioSpectrum
                    className='soundSpectrum'
                    id="audio-canvas"
                    height={200}
                    width={300}
                    audioId={'audio-element'}
                    capColor={'red'}
                    capHeight={1}
                    meterWidth={1}
                    meterCount={2000}
                    meterColor={[
                        {stop: 0, color: '#f00'},
                        {stop: 0.5, color: '#0CD7FD'},
                        {stop: 1, color: 'red'}
                    ]}
                    gap={1}
                />
            </div>
        )
    }
}