import { Card, CardContent } from "@/components/ui/card";

export const DataNotFound = () => {
  return (
    <Card>
      <CardContent className="text-center py-10">
        <h1 className="text-3xl font-semibold">Data Tidak Ditemukan !</h1>
        <p>Silakan coba lagi ! atau kamu dapat memeriksa halaman lain melalui halaman di bawah ini!</p>
      </CardContent>
    </Card>
  );
};
