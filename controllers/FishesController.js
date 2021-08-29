import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export const getFishes = (req, res) => {
  fs.readFile("fishes.json", "utf8", function (err, data) {
    if (err) console.log(err);
    else {
      const obj = JSON.parse(data);
      res.status(200).send(obj);
    }
  });
};

export const getFishById = (req, res) => {
  const { id } = req.params;
  fs.readFile("fishes.json", "utf8", (err, jsonString) => {
    if (err) console.log(err);
    else {
      const fishData = JSON.parse(jsonString);
      const fishToFind = fishData.find((fish) => fish.id === id);
      if (fishToFind !== undefined) {
          res.status(200).send(fishData.find((fish) => fish.id === id));
        } else {
            res.status(404).send(`No fish with id ${id} in database.`);
        }
    }
  });
};

export const createFish = (req, res) => {
    const fish = req.body;
    fs.readFile('fishes.json', 'utf8', (err, jsonString) => {
      if (err) console.log(err);
      else{
          let fishData = JSON.parse(jsonString);
          fishData.push({ id: uuidv4(), ...fish });
          const fishDataToWrite = JSON.stringify(fishData, null, 2);
          fs.writeFile('fishes.json', fishDataToWrite, (err) => {
              if (err) console.log(err)
              else res.status(201).send(`Fish of type: ${fish.type} added to database.`);
          })
      }
  })
};

export const deleteFish = (req, res) => {
  const { id } = req.params;
  fs.readFile('fishes.json', 'utf-8', (err, jsonString) => {
      if (err) console.log(err)
      else{
          let fishData = JSON.parse(jsonString);
          const fishDataCurated = fishData.filter((fish) => fish.id !== id);
          const fishDataToWrite = JSON.stringify(fishDataCurated, null, 2);
          fs.writeFile('fishes.json', fishDataToWrite, (err)=> {
              if (err) console.log(err)
              else res.send(`Fish with id ${id} is deleted from the database.`);
              
          })
      }
  })
};

export const updateFish = (req, res) => {
    const { id } = req.params;
    const { type, lengthInCentimeters, weightInKilos } = req.body;

    fs.readFile('fishes.json', 'utf8', (err, jsonString)=> {
        if (err) console.log(err);
        else{
            let fishData = JSON.parse(jsonString);
            const fishToUpdate = fishData.find((fish) => fish.id === id);
            if (type) fishToUpdate.type = type;
            if (lengthInCentimeters) fishToUpdate.lengthInCentimeters = lengthInCentimeters;
            if (weightInKilos) fishToUpdate.weightInKilos = weightInKilos;
            const fishDataToWrite = JSON.stringify(fishData, null, 2);
            fs.writeFile('fishes.json', fishDataToWrite, (err)=> {
                if (err) console.log(err);
                else res.send(`Fish with id ${id} has been updated.`);
            })
        }
    })
};
