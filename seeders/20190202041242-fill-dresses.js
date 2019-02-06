'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //hacer los arrays, unico archivo en el que debo de trabajar
    let dressesData = [];
    let dressName = ["Sequin Stripe Sleeveless Wrap Dress", "Zoe Brushstroke Sequin V-Neck Mini Dress", "Ombre Sequined Short Sleeve Mini Dress", "Butterfly Sleeve Stretch Silk Dress Black", "Rosiemarie Off the Shoulder Straight Dress with Ruffled", "Striped Sequin Short-Sleeve Mini Cocktail Dress", "One-Shoulder Long Satin Dress", "Off-the-Shoulder Floral-Printed Striped Organza Gown with 3D Flowers", "Kiera Strapless Side-Slit Frill Gown", "Embellished Satin Illusion Trumpet Gown", "Kaitlyn Asymmetrical Cutout Gown", "Off-theShoulder Ombre Textured Gown"];

     let dressDescription = ["Aidan by Aidan Mattox wrap dress in striped sequins. Approx. 38L down center back.V neckline and back. Sleeveless; spaghetti straps. Contrast sash at waist. Sheath silhouette. Midi length. Polyester self/lining. Dry clean. Imported.", "Dress The Population Zoe mini dress in brushstroke sequins.V neckline and back. Cap sleeves. Sheath silhouette. Hidden back zip. Mini length. Polyester/spandex. Hand wash or dry clean. Imported.", "Aidan by Aidan Mattox cocktail dress in ombré sequins. Approx. 32L down center back. Jewel neckline. Short sleeves. Shift silhouette.Mini length.Straight hem. Nylon knit. Polyblend lining. Dry clean. Imported.", "Milly stretch charmeuse dress. Approx. measurements: 31L shoulder to hem, 23L center back to hem. Bateau neckline; scoop back. Butterfly sleeves. Relaxed fit. Hem hits mid-thigh. Back zip. Silk/spandex; polyester lining. Dry clean. Made USA of domestic material.", "Cinq à Sept Rosiemarie crepe cocktail dress. Off-the-shoulder neckline with satin ruffled frills. Long sleeves. Slim silhouette. Hidden back zip. Mid-thigh length. Triacetate/polyester. Lining, polyester/spandex. Imported.", "Aidan by Aidan Mattox cocktail dress with sequin stripes.Approx. 20L down center back.High neckline; scoop back with wide ribbon ties.Short sleeves. Hidden back zip. Body-con silhouette. Mini length. Straight hem. Sequin polyester. Polyblend lining. Dry clean.Imported.", "Aidan by Aidan Mattox gown in shiny satin. Approx. 45.4L down center back. One-shoulder neckline. Sleeveless. Cutout back. Column silhouette. Floor length. Back zip. Polyester. Dry clean.Imported.", "Marchesa Notte striped, floral-print organza gown with 3D flowers. Off-the-shoulder neckline. Short sleeves. Draped bodice. A-line silhouette. Floor-length hem. Hidden back zip. Polyester. Imported.", "cinq a sept Kiera gown with ruffle detail. Strapless neckline. Sleeveless. Column silhouette. Side slit hem. Floor length. Polyester/viscose/spandex. Imported.", "Rickie Freeman for Teri Jon embellished satin gown. Approx. 62.5L from shoulder to hem. High-bateau neckline; sweetheart illusion. Sheer elbow-length sleeves. Embellished bodice. Trumpet silhouette. Center back zip. Floor-length hem. Acetate/polyester/spandex. Stretch acetate lining. Dry clean. Imported.", "Alice + Olivia Kaitlyn sequined gown. Asymmetrical neckline. Sleeveless. Cutout detail at waist. Column silhouette. Floor-skimming hem. Exposed back zip. Polyester/spandex; silk combo. Lining polyester/spandex lining. Imported.", "Marchesa Notte ombré textured gown. Off-the-shoulder neckline. Banded cap sleeves. Ruched bodice. A-line silhouette. Hidden back zip. Textured skirt. Floor length. Nylon. Imported."];

    let dressPicture = ["/public/assets/images/SequinStripeSleevelessWrapDress.jpg", "/public/assets/images/ZoeBrushstrokeSequinV-NeckMiniDress.png", "/public/assets/images/OmbreSequinedShort-SleeveMiniDress.png", "/public/assets/images/ButterflySleeveStretchSilkDressBlack", "/public/assets/images/RosiemarieOff-the-shoulderStraightDresswRuffled", "/public/assets/images/StripedSequinShort-SleeveMiniCocktailDress", "/public/assets/images/One-ShoulderLongSatinDress", "/public/assets/images/Off-the-ShoulderFloral-PrintedStripedOrganzaGownwith3DFlowers", "/public/assets/images/KieraStraplessSide-SlitFrillGown", "/public/assets/images/EmbellishedSatinIllusionTrumpetGown", "/public/assets/images/KaitlynAsymmetricalCutoutGown", "/public/assets/images/Off-theShoulderOmbreTexturedGown"];

    let dressCategory = ["Cocktail", "Cocktail", "Cocktail", "Cocktail", "Cocktail", "Cocktail", "Evening Gown", "Evening Gown", "Evening Gown", "Evening Gown", "Evening Gown", "Evening Gown"];

    const sizes = ["0", "2", "4", "6", "0", "2", "4", "6", "0", "2", "4", "6"];

    for (let i = 0; i < 12; i++) {
      let index = [Math.floor(Math.random() * 12)];
      let currentDressName = dressName[index];
      let currentDressDescription = dressDescription[index];
      let currentDressCategory = dressCategory[index];
      let currentDressPicture = dressPicture[index];
      let currentSizes = sizes[index];

      const seedData = {
        name: currentDressName,
        category: currentDressCategory,
        size: currentSizes,
        description: currentDressDescription,
        stock: Math.floor(Math.random() * 20),
        picture: currentDressPicture,
        price: (Math.random() * (5000 - 800) + 800)
      };
      dressesData.push(seedData);
    }

    return queryInterface.bulkInsert('Dresses', dressesData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dresses', null, {});
  }
};
