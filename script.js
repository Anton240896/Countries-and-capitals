function displayCapital() {
    let selectBox = document.getElementById("countries");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    let capitalImage = document.getElementById("capital-photo");

   
    switch (selectedValue) {
        
    case "albania":
    capitalImage.src = "https://turvopros.com/wp-content/uploads/2019/08/tirana.jpg";
    break;
            
    case "armenia":
    capitalImage.src = "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Yerevan-1.jpg";
    break;
                
    case "austria":
    capitalImage.src = "https://www.travelandleisure.com/thmb/zFpjulihpXjpUV7gKNHzydvJANA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vienna-austria-VIENNATG0621-ecb0ee926c2d49c4bce610db594f7405.jpg";
    break;
                    
    case "azer":
    capitalImage.src = "https://cdn.britannica.com/30/211830-050-733DB46D/Baku-Azerbaijan-Caspian-Sea.jpg";
    break;
                        
    case "belgium":
    capitalImage.src = "https://tripmydream.cc/travelhub/travel/block_gallery/89/908/default_89908.jpg?";
    break;

    case "bulgaria":
    capitalImage.src = "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/sofia-1.jpg";
    break;

    case "bosnia":
    capitalImage.src = "https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/saraievo-4.jpg";
    break;

    case "croatia":
    capitalImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zagreb_%2829255640143%29.jpg/1200px-Zagreb_%2829255640143%29.jpg";
    break;
            
    case "czech":
    capitalImage.src = "https://lp-cms-production.imgix.net/2023-08/PRAGUE-GettyImages-1182432355.jpg";
    break;
                
    case "denmark":
    capitalImage.src = "https://www.travelandleisure.com/thmb/G5hwSYQUTvgGQISOXymFUYYr-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/copenhagen-dk-COPENHAGENTG0721-4a481cb6025b43d1a781b1571b144f46.jpg";
    break;
            
    case "england":
    capitalImage.src = "https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg";
    break;
                
    case "estonia":
    capitalImage.src = "https://lp-cms-production.imgix.net/2019-06/107049001%20.jpg";
    break;
                    
    case "finland":
    capitalImage.src = "https://a.cdn-hotels.com/gdcs/production30/d1949/f4ed2076-6fd9-4a30-9d99-f4ed71bdf7b5.jpg";
    break;
                        
    case "france":
    capitalImage.src = "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg";
    break;
                            
    case "germany":
    capitalImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/1200px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg";
    break;

    case "georgia":
    capitalImage.src = "https://www.advantour.com/img/georgia/images/tbilisi.jpg";
    break;
            
    case "greece":
    capitalImage.src = "https://www.visitgreece.gr/images/1743x752/jpg/files/s_1852670350_athens_1743x752.jpg";
    break;
                
    case "hungary":
    capitalImage.src = "https://upload.wikimedia.org/wikipedia/commons/6/60/Budapest_Hungarian_Parliament_%2831363963556%29.jpg"
    break;
                    
    case "iceland":
    capitalImage.src = "https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg";
    break;
                        
    case "ireland":
    capitalImage.src = "https://osi.ie/wp-content/uploads/2018/08/dublin-skyline.jpg";
    break;
                            
    case "italy":
     capitalImage.src = "https://media.timeout.com/images/105211701/750/422/image.jpg";
     break;

    case "kazahstan":
    capitalImage.src = "https://upload.wikimedia.org/wikipedia/commons/6/66/Central_Downtown_Astana_2.jpg";
    break;

    case "latvia":
    capitalImage.src = "https://www.traveller.ee/blog/wp-content/uploads/2016/07/RigaOldTown_Droneview03.jpg";
    break;

    case "lithuania":
    capitalImage.src= "https://upload.wikimedia.org/wikipedia/commons/2/2a/Vilnius_old_town_by_Augustas_Didzgalvis.jpg";
    break;
       
        
    case "lux":
    capitalImage.src = "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_145/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/5/3/531dd0762dac8740b4349c077925b835a0b199b7/15-things-luxembourg-according-someone-live.jpg";
    break;


    case "malta":
    capitalImage.src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/malta-valetta-view-of-the-old-town-of-valletta-towards-saint-pauls-cathedral-richard-taylor.jpg";
    break;


    case "mont":
    capitalImage.src = "https://kuku.travel/wp-content/uploads/2017/09/%D1%84%D0%BE%D1%82%D0%BE-%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B8-8.jpg";
    break;


    case "neth":
    capitalImage.src = "https://cdn.britannica.com/30/180130-138-4FC01CDD/Overview-Amsterdam.jpg?w=800&h=450&c=crop";
    break;

    case "norway":
    capitalImage.src = "https://a.cdn-hotels.com/gdcs/production106/d1597/5303351b-a7d2-4775-994a-348002ea13d2.jpg";
    break;


    case "poland":
    capitalImage.src = "https://lp-cms-production.imgix.net/image_browser/warsaw%20scenery.jpg";
    break;


    case "portugal":
    capitalImage.src = "https://static.independent.co.uk/2023/07/12/14/iStock-1124556360.jpg";
    break;

    case "romania":
    capitalImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bucharest_city_center.jpg/1200px-Bucharest_city_center.jpg";
    break;

    case "england":
    capitalImage.src = "https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg";
    break;


    case "scotland":
    capitalImage.src = "https://static.tildacdn.com/tild6336-3234-4165-b561-393537373137/Glasgow.jpg"
    break;
    

    case "slovakia":
    capitalImage.src = "https://files.slovakia.travel/_processed_/csm_Bratislavsky%2520hrad_94d492b936.jpg";
    break;


    case "slovenia":
    capitalImage.src = "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2022/02/lubiana2-iStock-494314515.jpg?v=1645446097";
    break;

    case "spain":
    capitalImage.src = "https://all.accor.com/magazine/imagerie/1-0684.jpg";
    break;

    case "sweden":
    capitalImage.src = "https://a.cdn-hotels.com/gdcs/production160/d1943/a0fe0b3e-1469-412a-a45e-276f65e77702.jpg";
    break;

    case "switz":
    capitalImage.src = "https://deih43ym53wif.cloudfront.net/bern-switzerland-shutterstock_1845136612.jpg_ecb4c93750.jpg";
    break;

    case "ukraine":
      capitalImage.src = "https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2022-03/kyiv.jpg";
      break;

    case "turkey":
    capitalImage.src = "https://lowcost.ua/wp-content/uploads/2018/09/istanbul_1.jpg";
    break;

    default:
    }
 }
    
    