import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/karakaku.scss';

const List: React.FC = () => {
    const songs = [
        { name: 'Sabrina_Carpenter-Espresso', title: 'Sabrina Carpenter - Espresso' },
        { name: 'd4vd-Feel_It', title: 'd4vd - Feel It' },
    ];

    return (
        <div className="home">
        <h1>Karakaku</h1>
        <p>Sélectionnez votre musique : </p>
        <ul className='song-list'>
            {songs.map((song) => (
            <li key={song.name}>
                <Link to={`/karakaku/${song.name}`}>
                {song.title}
                </Link>
                </li>
            
            ))}
        </ul>
        </div>
    );
};

export default List;
