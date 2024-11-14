
@import url('https://fonts.googleapis.com/css2?family=Anta&family=Poppins&family=Teko:wght@300..700&display=swap');

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: rgb(36,6,6);
background: linear-gradient(90deg, rgba(36,6,6,1) 21%, rgba(194,18,18,1) 50%, rgb(23, 27, 146) 100%);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 40px;
    text-align: center;
    background-color: #f9f9f9; 
    border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
  
  h1 {
    font-size: 6rem;
    font-family: "Anta", sans-serif;
    font-style: normal;
    margin-bottom: 40px;
    text-align: center;
    color: #f9f9f9;
    font-weight: 700;
  }
  
  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .search-input {
    padding: 10px;
    border: none;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 380px;
    font-size: 16px;
    outline: none;
  }
  
  .search-button {
    padding: 10px 11px;
    background-color: #fff;
    color: #092635;
    border: none;
    font-size: 20px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .search-icon {
    font-size: 20px;
    margin-right: 5px;
  }
  
  .filters {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f9f9f9;
    margin-top: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  #sort-by {
    border-radius: 20px;
    padding: 5px 5px;
    border: none;
    font-weight: 600;
    font-size: 12px;
    outline: none;
    color: #333;
  }

  #genre {
    border-radius: 20px;
    padding: 5px 5px;
    font-weight: 600;
    font-size: 12px;
    border: none;
    outline: none;
    color: #333;
  }

  .movie-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 50px 50px;
  }
  
  .movie {
    background-color: white;
    padding: 20px;
    height: max-content;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .movie img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0px 6px 15px -3px rgba(0,0,0,0.1);
  }
  
  .movie h2 {
    color: #092635;
    font-size: 1.5rem;
    margin-top: 5px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  .movie p {
    font-size: 1rem;
    color: #666;
    margin: 0;
    margin-bottom: 10px;
  }
  .movie .rating {
    border: 2px solid #092635;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: 600;
    color: #333;
  }
  .read-more {
    background-color: #092635;
    color: #f9f9f9;
    margin: 10px 10px 10px 0;
    padding: 5px 10px;
    cursor: pointer;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 7px;

  }

  @media (max-width: 1200px) {
    .container {
      padding: 50px;
    }
    .movie-wrapper {
      padding: 50px;
    }
    .movie h2 {
        font-size: 15px;
    }
    .movie p {
        font-size: 10px;
    }
    .movie .rating {
        font-size: 8px;
        padding: 3px 5px;
    }
    .read-more {
        font-size: 10px;
    }
  }

  @media (max-width: 800px) {
    .movie-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 50px 50px;
      }
  }
  
  @media (max-width: 600px) {
    .movie-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding: 50px 50px;
      }
  
    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
  
    .search-input {
      width: 200px;
    }
  
    .filters {
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 10px;
    }
  
    #sort-by,
    #genre {
      padding: 5px 8px;
      font-size: 10px;
    }
  }

  @media (max-width: 450px) {
    .movie-wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        padding: 20px 20px;
      }
  
    h1 {
      font-size: 2rem;
      margin-bottom: 20px;
    }
  
    .search-input {
      width: 120px;
    }
   .search-button {
    font-size: 12px;
   }
    .filters {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;
      gap: 7px;
      margin-bottom: 10px;
    }
  
    #sort-by,
    #genre {
      padding: 5px 8px;
      font-size: 10px;
    }
  }
