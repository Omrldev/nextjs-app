import books from "../db";

export function GET() {
    return Response.json(books);
}