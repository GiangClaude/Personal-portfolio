let Education = document.getElementById("Education");
        let Experience = document.getElementById("Experience");
        let purple = "#898EFE";
        let white = "#FBF2FF";
        let textEducation = document.getElementsByClassName("textEducation");
        let textExperience = document.getElementsByClassName("textExperience");
        let lC_Heading = document.getElementsByClassName("lC_Heading");
        let imgABMe = document.getElementsByClassName("setHover");
        function ExpFunction(){
            lC_Heading[0].style.backgroundColor = white;
            Experience.style.backgroundColor = purple;
            textEducation[0].style.display = "none";
            textExperience[0].style.display = "block";
        }

        function EduFunction(){
            lC_Heading[0].style.backgroundColor = purple;
            Experience.style.backgroundColor = purple;
            textEducation[0].style.display = "block";
            textExperience[0].style.display = "none";
        }
        function changeImage(){
            imgABMe[0].style.display = "none";
            imgABMe[0].
        }
