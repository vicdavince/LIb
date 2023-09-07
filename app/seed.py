from app import db, app
from app.models import Reservations, Members, Books, create_all_tables, drop_all_tables

# Members data to seed into the database
members_data = [
    {
        "name": "Leehaney",
        "debt": 500,
        "email": "leeahney@gmail.com",
        "phone_number": "+254",
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
        "name": "Mike",
        "debt": 200,
        "email": "mike@gmail.com",
        "phone_number": "+254",
        "image": "https://images.unsplash.com/photo-1533108344127-a586d2b02479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
        "name": "Sarah",
        "debt": 0,
        "email": "sarah@gmail.com",
        "phone_number": "+254",
        "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    },
]

# Books data to seed into the database
books_data = [
    {
        "title": "The 48 Laws of power",
        "author": "Robert Greene",
        "genre": "Personal Growth",
        "publisher": "Penguine Books",
        "publication_date": "12/05/2004",
        "description": "A very good book",
        "image": "https://miro.medium.com/v2/resize:fit:588/1*f0znhTHMsMTsq9q-m14VIg.jpeg",
        "amount": 10,
    },
    {
        "title": "Art of Seduction",
        "author": "Robert Greene",
        "genre": "Personal Growth",
        "publisher": "Penguine Books",
        "publication_date": "12/05/2004",
        "description": "A very good book",
        "image": "https://nuriakenya.com/wp-content/uploads/2021/01/The-Art-of-Seduction-NuriaKenya-1-600x750.png",
        "amount": 1,
    },
    {
        "title": "Who moved my cheese",
        "author": "Spencer Johnson",
        "genre": "Personal Growth",
        "publisher": "Penguine Books",
        "publication_date": "8/09/1998",
        "description": "Who Moved My Cheese? is a simple parable that reveals profound truths. It is an amusing and enlightening story of four characters who live in a 'Maze' and look for 'Cheese' to nourish them and make them happy.",
        "image": "https://skygarden.azureedge.net/media/products/1252785-df66b5b291b94f819198265f9abffa0f.jpg",
        "amount": 5,
    },
]

# Reservation data to seed into the database
reservations_data = [
    {"book_id": 1, "member_id": 1, "returned": False, "cost": 100},
    {"book_id": 2, "member_id": 2, "returned": False, "cost": 200},
    {
        "book_id": 3,
        "member_id": 1,
        "returned": False,
        "cost": 400,
        "return_date": "2023-07-07",
    },
]


def seed_data():
    # bring the app to context
    app.app_context().push()

    # Uncomment only if you have already created tables
    drop_all_tables()

    # To create new tables
    create_all_tables()

    # Create members
    members = [Members(**data) for data in members_data]

    # Create books
    books = [Books(**data) for data in books_data]

    # Create reservations
    reservations = [Reservations(**data) for data in reservations_data]

    # Add members and reservations to the session
    db.session.add_all(members)
    db.session.add_all(books)
    db.session.add_all(reservations)

    # Commit the session
    db.session.commit()
