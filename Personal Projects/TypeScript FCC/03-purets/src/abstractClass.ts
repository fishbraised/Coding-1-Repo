abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}

  abstract getSepia(): void;

  getReelTime(): number {
    // complex calc
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const lewis = new Instagram("TEST", "TEST", 3);
lewis.getReelTime;
