import axios from "axios";
axios
  .get("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1c085N1ZHbGZpeHhoMUVMNmdkdnN2WU8wTE5SWWR0MWN3cmNXSGVZWUwwSFlad0JwbiIsImp0aSI6IjlhOTE0OWFlMDA5OWNhNDcwODVlOGQyZjdmNjdkYjc1Mzk5N2I1NTM2ZTBjZTY5YjZmYzJiYzg0ZTljNTE1YzE1MDRjYWU3MmEyYjgzNWE4IiwiaWF0IjoxNjg1MDk3Mzg1LCJuYmYiOjE2ODUwOTczODUsImV4cCI6MTY4NTEwMDk4NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.cknEMqsnBXN0NVu__kZHCj6af9bLvAOAuQ0IsvXrUQnbyvTgw0w09Ii53pTsEqx3L1catw9NGAcqxFTYRwAvyGZbU2VFxmb_mwfnhGSdKPxWGhsxpeoKYRQ-9hXr3P505J6lXU5sLZkGDdaB8VETpSqir2-AW1Yb7uqKmjg6siW6dQt8pOfuCF8aSLp3DM-RoP1utkf5UGuz647iucYiWrKQkQfp2qfGZEvmN2v2If6-5wwAKWRtW91qgLgj_Gk22JQgxQBy5obplWYp_xIHht3S9xA54eWRvasJT8DJK5S6NB-YvRCMqN7fqgwp1Jl2EAMa_y_MZPjLaB61_anWzA",
    },
  })
  .then((data) => console.log(data));
