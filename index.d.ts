declare function mp3Duration(filePathOrBuffer: string | Buffer , cbrEstimate?: boolean): Promise<number>;
declare function mp3Duration(filePathOrBuffer: string | Buffer): Promise<number>;

export = mp3Duration;
