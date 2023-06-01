## Endpoint: POST /api/register
This endpoint should allow users to register. Hash the password on store.
### Request Body
```
{
  "name": "harshit",
  "email": "harshit.sahu@gmail.com",
  "password": "qwerty",
  "address": {
    "street": "String",
    "city": "String",
    "state": "String",
    "country": "String",
    "zip": "String"
  }
}
```

## Endpoint: POST /api/login
This endpoint should allow users to login. Return JWT token on login.
### Request Body
```
{
  "email": "harshit.sahu@gmail.com",
  "password": "12345"
}
```

## Endpoint: PUT /api/user/:id/reset
This endpoint should allow users to reset the password identified by user id, providing the current password and new password in the body.
### Request Body
```
{
  "email": "harshit.sahu@gmail.com",
  "password": "qwerty",
  "newPassword":"12345"
}
```

## Endpoint: GET /api/restaurants
This endpoint should return a list of all available restaurants.
### Response Body
```{
    "msg": "all the restaurants down below",
    "data": [
        {
            "address": {
                "street": "String",
                "city": "String",
                "state": "String",
                "country": "String",
                "zip": "String"
            },
            "_id": "64784c8ec690ba9f4991e63e",
            "name": "String",
            "menu": [
                {
                    "name": "new",
                    "description": "String",
                    "price": 90,
                    "image": "String",
                    "_id": "64784e86036e4c736fa10b60"
                }
            ],
            "__v": 0
        }
    ]
}

```

## Endpoint: GET /api/restaurants/:id
This endpoint should return the details of a specific restaurant identified by its ID.
### Response Body
```
{
    "msg": "one restaurant down below",
    "data": {
        "address": {
            "street": "String",
            "city": "String",
            "state": "String",
            "country": "String",
            "zip": "String"
        },
        "_id": "64784c8ec690ba9f4991e63e",
        "name": "String",
        "menu": [
            {
                "name": "new",
                "description": "String",
                "price": 90,
                "image": "String",
                "_id": "64784e86036e4c736fa10b60"
            }
        ],
        "__v": 0
    }
}
```

## Endpoint: GET /api/restaurants/:id/menu
This endpoint should return the menu of a specific restaurant identified by its ID.
### Request Body
```
{
    "msg": "menu down below",
    "menu": [
        {
            "name": "String",
            "description": "String",
            "price": 45,
            "image": "String",
            "_id": "64784c8ec690ba9f4991e63f"
        },
        {
            "name": "new",
            "description": "String",
            "price": 90,
            "image": "String",
            "_id": "64784c8ec690ba9f4991e63f"
        },
        {
            "name": "new",
            "description": "String",
            "price": 90,
            "image": "String",
            "_id": "64784e86036e4c736fa10b60"
        }
    ]
}
```

## Endpoint: PUT /api/restaurants/:id/menu
This endpoint should allow the user to add a new item to a specific restaurants menu identified by it id.


## Endpoint: DELETE /api/restaurants/:id/menu/:id
This endpoint should allow the user to delete a particular menu item identified by its id from a specific restaurant.
### Response Body
```
{
    "msg": "menu deleted",
    "menu": [
        {
            "name": "new",
            "description": "String",
            "price": 90,
            "image": "String",
            "_id": "64784e86036e4c736fa10b60"
        }
    ]
}
```

## Endpoint: POST /api/orders
This endpoint should allow the user to place an order.
### Request Body
```
{
	 "restaurant" : "64784c8ec690ba9f4991e63e",
   "items": [{
     "name": "String",
     "price": 45,
     "quantity": 4
   }],
   "totalPrice": 3453,
   "deliveryAddress": {
     "street": "delhi",
     "city": "mumbai",
     "state": "String",
     "country": "String",
     "zip": "String"
   },
   "status": "placed"
}
```

## Endpoint: GET /api/orders/:id
This endpoint should return the details of a specific order identified by its ID.
### Response Body
```
{
    "msg": "order below",
    "data": {
        "deliveryAddress": {
            "street": "delhi",
            "city": "mumbai",
            "state": "String",
            "country": "String",
            "zip": "String"
        },
        "_id": "647858ea217e5cf0485bc89b",
        "user": "647842cdb1036d3661239413",
        "restaurant": "64784c8ec690ba9f4991e63e",
        "items": [
            {
                "name": "String",
                "price": 45,
                "quantity": 4,
                "_id": "6478594d217e5cf0485bc8a2"
            }
        ],
        "totalPrice": 3453,
        "status": "placed",
        "__v": 0
    }
}
```

## Endpoint: PUT /api/orders/:id
This endpoint should allow users to update the status of a specific order identified by its ID.
### Request Body
```
{
    "msg": "order updated",
    "data": {
        "deliveryAddress": {
            "street": "delhi",
            "city": "mumbai",
            "state": "String",
            "country": "String",
            "zip": "String"
        },
        "_id": "647858ea217e5cf0485bc89b",
        "user": "647842cdb1036d3661239413",
        "restaurant": "64784c8ec690ba9f4991e63e",
        "items": [
            {
                "name": "String",
                "price": 45,
                "quantity": 4,
                "_id": "6478594d217e5cf0485bc8a2"
            }
        ],
        "totalPrice": 3453,
        "status": "placed",
        "__v": 0
    }
}
```



## Demonstration Video Link Down Below:-
