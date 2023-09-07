from app import db, app
from datetime import datetime, timedelta
from sqlalchemy import CheckConstraint


# Create the book model
class Books(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), nullable=False)
    author = db.Column(db.String(200), nullable=False)
    genre = db.Column(db.String(100), nullable=False)
    publisher = db.Column(db.String(200), nullable=False)
    publication_date = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image = db.Column(db.String(500), nullable=False)
    amount = db.Column(db.Integer, nullable=False, default=0)
    reservations = db.relationship(
        "Reservations", backref="Books", cascade="all, delete-orphan"
    )

    # Makes sure the book count never goes below 0
    __table_args__ = (CheckConstraint("amount >= 0", name="check_amount_non_negative"),)

    # Used to log data when debugging
    def __repr__(self):
        return f"Books:{self.title, self.author, self.genre, self.publisher, self.publication_date, self.description, self.image, self.amount}"

    def __init__(
        self,
        title,
        author,
        genre,
        publisher,
        publication_date,
        description,
        image,
        amount,
    ):
        self.title = title
        self.author = author
        self.genre = genre
        self.publisher = publisher
        self.publication_date = publication_date
        self.description = description
        self.image = image
        self.amount = amount


# Formats the response to be sent to frontend
def format_book(book):
    return {
        "id": book.id,
        "title": book.title,
        "author": book.author,
        "genre": book.genre,
        "publisher": book.publisher,
        "publication_date": book.publication_date,
        "description": book.description,
        "image": book.image,
        "amount": book.amount,
    }


# Create the members model
class Members(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(200), nullable=False)
    debt = db.Column(db.Integer, nullable=False)
    phone_number = db.Column(db.String(200), nullable=False)
    image = db.Column(db.String(500), nullable=False)
    reservations = db.relationship(
        "Reservations", backref="members", cascade="all, delete-orphan"
    )

    # Used to log data when debugging
    def __repr__(self):
        return f"Member:{self.id, self.name, self.email, self.debt, self.phone_number, self.image}"

    def __init__(self, name, email, debt, phone_number, image):
        self.name = name
        self.email = email
        self.debt = debt
        self.phone_number = phone_number
        self.image = image


# Formats the response to be sent to frontend
def format_member(member):
    return {
        "id": member.id,
        "name": member.name,
        "debt": member.debt,
        "email": member.email,
        "phone_number": member.phone_number,
        "image": member.image,
    }


# Create the reservations model
class Reservations(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey("books.id"))
    member_id = db.Column(db.Integer, db.ForeignKey("members.id"))
    return_date = db.Column(
        db.Date, nullable=False, default=datetime.utcnow() + timedelta(days=7)
    )
    returned = db.Column(db.Boolean, nullable=False)
    cost = db.Column(db.Integer, nullable=False)

    # Used to log data when debugging
    def __repr__(self):
        return f"Reservation:{self.id, self.book_id, self.member_id, self.return_date, self.returned, self.cost}"

    def __init__(self, book_id, member_id, returned, cost, return_date=None):
        self.book_id = book_id
        self.member_id = member_id
        if return_date is not None:
            self.return_date = datetime.strptime(return_date, "%Y-%m-%d").date()
        self.returned = returned
        self.cost = cost


# Format reservation for frontend
def format_reservation(reservation, book, member):
    return {
        "id": reservation.id,
        "book": book,
        "member": member,
        "return_date": reservation.return_date,
        "returned": reservation.returned,
        "cost": reservation.cost,
    }


# Create the database tables within the Flask application context
def create_all_tables():
    with app.app_context():
        db.create_all()


# Drops all tables within the Flask application context
def drop_all_tables():
    with app.app_context():
        db.drop_all()
