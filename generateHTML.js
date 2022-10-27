const generateHTML = (data) => {
    console.log(data)

    const {name,  //deconstructure variables from the answers
        location, 
        bio, 
        linkedinURL, 
        githubURL
    } = data   


    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</head>
    <title>${name}'s Portfolio</title> 
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img src="..." class="img-fluid" alt="Picture of ${name}">
            </div>
            <div class="col-md-6">
                <h1>${name}'s Portfolio</h1>
                <h2>${location}</h2>
                <p>${bio}</p>
                <a href="${githubURL}">
                    <i class="bi bi-github fs-3"></i>
                </a>
                <a href="${linkedinURL}">
                    <i class="bi bi-linkedin fs-3"></i>
                </a>

            </div>
        </div>
    </div>
</body>
</html>
    `
}
export default generateHTML //ES6 way or exporting 