"use client";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import Container from "../components/navbar/Container";
import { SafeListing, SafeUser } from "../types";

interface FavoritesClientProps {
  favoriteListings: SafeListing[];
  currentUser: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  favoriteListings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you have favorited!"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {favoriteListings.map((favoriteListing) => (
          <ListingCard
            key={favoriteListing.id}
            data={favoriteListing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
