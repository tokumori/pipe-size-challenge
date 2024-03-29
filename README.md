# Pipe Size Challenge
> A challenge to determine the minimum pipe size based off the given info and create a diagram that renders the results.

## Key Stats
- rateX = 16.45
- rateY = 18.9
- rateZ = rateX + rate Y
- pipeSize = (1.732 x 12.9 x 200 x rate)/ (208 x tolerance)
- tolerance <= 2%
- valveSize = rate x 1.25 x 1.25
- pipeSizes = [8,10,12,16,20,25,32,40,50,63,80,100,127,160,201,254,320,404,509,642,810,1021,1288,1624,2048,2582,3256,4106,5178,6529,8233,10382,13091,16507,20815,26248,33098,41735,52627,66361,83680,105518,133056,167780,211566,250000,300000,350000,400000,450000,500000,600000,700000,750000,800000,900000,1000000,1250000,1500000,1750000,2000000 ]
- valveSizes = [15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

## Goal 1
Create a function that takes in `[rateX, rateY]` and returns `[pipeSizeX, valveSizeX, pipeSizeY, valveSizeY, pipeSizeZ]`.

## Goal 2
Write a program that dynamically draws a diagram with the returned values.
![Pipe Diagram](./diagram.png)