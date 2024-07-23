<h2>Ödev 1</h2>
Kullanıcılar, etkinlikler, etkinliklerin yapılacağı konum ve etkinlik katılımcılarını size sağlanan veri seti üzerinden görüntüleyebilecek bir GraphQL sunucu oluşturmanız gerekiyor.

<h3>Gereksinimler</h3>
<ul>
  <li>Şuradaki veri seti kullanılarak bir GraphQL sunucusu ayağa kaldırılmalıdır.</li>
  <li>Temel olarak User, Event, Location ve Participant tiplerini oluşturmalısınız. Bu tiplerle alakalı fieldları veri seti üzerinden görüntüleyebilirsiniz.</li>
  <li>Bir User'a ait bir veya birden fazla Event olabilir.</li>
  <li>Bir Event, bir User ile ilişkili olmalıdır.</li>
  <li>Bir Event, bir Location ile ilişkili olmalıdır.</li>
  <li>Bir Event birden fazla Participant ile ilişkili olmalıdır.</li>
  <li>Tüm tipler üzerinde tümünü listeleme ve id bazlı bir kaydı getirme Query'leri yazılmalıdır.</li>
</ul>
Günün sonunda aşağıdaki Query'ler çalışır vaziyette olmalıdır.
<br></br>

  query users{}</br>
  query user(id: 1){}</br>

  query events{}</br>
  query event(id: 1){}</br>
  query events{
    id
    title
    user{
      id
      username
    }
    pariticipants{
      id
      username
    }
    location{
      id
      name
    }
  }

  query locations{}</br>
  query location(id: 1){}</br>

  query participants{}</br>
  query participant(id: 1){}</br>

