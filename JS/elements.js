function playaudio(track)
{
    var audio = new Audio(track);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}