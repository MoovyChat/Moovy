import { MigrationInterface, QueryRunner } from 'typeorm';

export class fakeComments1665470610402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 45520, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 14326, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 48138, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 21258, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 7446, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 39770, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 52687, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 88465, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 80985, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 84410, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 81963, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 63689, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 35564, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 23551, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 1724, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 72198, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 35376, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 33053, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 52298, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 88018, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 48678, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 67589, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 68845, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 67146, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 42460, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 27550, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 70153, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 59101, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 1858, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 44360, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 26643, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 59136, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 93473, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 44665, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 41073, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 78449, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 94640, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 69607, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 9255, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 76750, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 61086, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 71, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 29283, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 7698, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 59831, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 80095, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 33841, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 47612, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 77844, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 90023, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 17511, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 3059, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 1020, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 65871, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 68509, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 95215, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 56641, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 42557, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 97738, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 48595, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 4384, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 49599, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 26273, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 31368, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '70058024', 78203, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 39815, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 94389, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 23338, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 16634, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 2852, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 45421, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 22305, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 18705, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 68993, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 93314, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 92576, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 29543, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 47016, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 67141, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 39850, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 39090, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 49476, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 35301, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 43465, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 99444, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 12482, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 34180, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 41741, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 22773, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 57781, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 50158, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 82758, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 73560, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 60177, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 43498, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 50834, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 77497, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 73708, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 32279, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 91426, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 78515, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 34586, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 1557, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 22044, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 83598, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 29128, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 19930, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 58205, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 63933, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 80298, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 80273, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 61737, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 8034, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 62210, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 96372, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 74283, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 40036, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 33421, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 38932, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 9345, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '70058024', 58593, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 65888, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 57209, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 80486, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 47380, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 61080, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 3932, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 7858, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 64997, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 70879, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 82462, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 33635, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 26957, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 36356, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 23506, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 92438, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 81867, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 93737, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 73065, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 60943, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 99301, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 42720, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 23103, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 64956, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 46519, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 74950, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 46173, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 67249, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 95855, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 39216, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 65556, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 69503, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 45980, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 67112, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 37754, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 6430, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 37323, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 10138, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 73204, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 4326, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 38829, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 4273, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 5647, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 59801, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 77996, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 47731, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 63114, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 67778, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 5277, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 27254, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 22799, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 71414, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 97034, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 36581, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 49036, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 64458, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '70058024', 86973, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 90054, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 42192, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 16739, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 67835, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 23261, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 10113, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 16192, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 2938, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 92250, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 18145, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 68587, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 65261, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '70058024', 44947, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 19500, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 92451, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 165, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 97503, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 37606, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 38276, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 3432, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 47885, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 82938, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 65593, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 67274, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 96330, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 20806, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 24530, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 22796, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 68423, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 31787, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 75641, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 1533, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 43706, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 60993, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 41439, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 15574, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 47669, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 61362, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 12782, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 54415, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 17420, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 50203, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 36067, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 83231, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 69669, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 28789, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 92993, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 68796, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 97627, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 23336, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 21733, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 64888, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 38662, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 96450, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 75266, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 83692, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 56053, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 31001, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 5714, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 36426, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 50509, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 98965, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 99426, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 88353, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 26908, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 46545, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 10868, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 32685, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 27679, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 73351, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 41495, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 20905, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 99470, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 88308, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 17477, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 97522, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 15957, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 53293, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 83469, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 74913, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 6529, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 48759, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 13142, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '70058024', 5319, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 36951, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 9873, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 20675, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 52455, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 43887, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 20599, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 85832, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 43273, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 50282, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 41386, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 21608, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 88609, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '70058024', 88884, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 29344, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 37677, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 20074, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 21108, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 83003, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 5968, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 42816, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 56255, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 85858, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 94544, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 24581, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 31003, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 49148, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 24327, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 37106, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 90720, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 38859, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 51760, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 42482, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 18326, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 75669, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 36797, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 12375, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 20373, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 44930, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 78184, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 60857, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 23856, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 68823, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 20630, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 8495, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 9118, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 34268, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 66607, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 75655, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 57484, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 97103, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 15069, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 38388, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 15529, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 30871, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 94970, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 7265, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 97155, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 72791, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 17318, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 56488, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 12268, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 63060, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 97923, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 73998, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 27133, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 29124, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 83862, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 19819, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 78956, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 20668, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 5447, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 9005, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 95539, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 34959, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 9316, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 16215, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 90612, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 3143, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 76517, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 70052, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '70058024', 41124, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 93625, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 31743, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 91375, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 5261, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 23596, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 35390, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 91833, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 93125, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 25584, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 64803, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 31566, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 16563, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 94995, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 24129, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 22161, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 62192, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 60038, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 58495, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 41055, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 85330, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 61787, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 89208, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 71422, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 2744, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 6147, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 84511, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 56247, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 10461, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 91166, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 47077, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 89529, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 9247, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 95663, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 52354, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 95749, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 40428, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 59603, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 617, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 19584, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 13129, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 72790, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 35943, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 36348, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 3756, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 27120, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 82978, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 51037, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 5921, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 3290, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 52288, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 71930, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 23290, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 16044, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 70624, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 3815, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 85016, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 63031, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 52081, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 26714, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 11257, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 41482, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 87937, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 95873, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 11229, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 69569, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 2770, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 18106, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 5451, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 7032, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 43712, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '70058024', 67892, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 77170, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 14776, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 22853, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 67944, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 60593, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 61276, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 30779, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 42565, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 17356, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 82826, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 35, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 89244, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 13287, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 97336, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 60693, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 11326, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 94001, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 40376, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 48182, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 3452, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 24929, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 97086, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 77181, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 60909, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 58328, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 65704, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 25031, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 84593, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 83804, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 16169, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 81354, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 36608, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 2223, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 58931, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 73353, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 9103, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 78204, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 58448, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 29525, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 53254, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 43868, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '70058024', 2838, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 40221, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 69979, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 48198, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 14767, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 82917, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 86119, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 93174, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 8234, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 77365, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 29455, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 32017, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 81905, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 60060, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 46125, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 33751, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 86261, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 76478, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 91554, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 88477, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 30297, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 65143, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 59888, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 82918, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '70058024', 88424, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 89641, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 61623, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 93676, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 31445, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 75852, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 13979, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 32667, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 59018, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 36435, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 3307, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 12707, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 23198, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 28366, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 9819, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 53868, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '70058024', 17943, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 26544, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 65153, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 2817, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 63295, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 50828, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 29494, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 22450, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 88255, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 91567, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 676, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 48665, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 7899, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 58985, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 40383, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 68738, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 43698, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 73874, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 96125, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 73846, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 17915, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 11204, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 92715, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 75112, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 93211, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 63577, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 55991, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 90127, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 12774, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 23829, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 22002, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 64169, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 76443, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 68028, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 61515, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 59496, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 88026, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 43987, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 8528, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 25897, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 94921, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 595, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 42098, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 65851, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 43253, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 14192, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 37515, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 87941, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 90661, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 43437, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 99483, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 26012, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 51773, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 10322, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 12865, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 42904, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 89440, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 97265, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 50313, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 55004, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 99022, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 49823, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 55160, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 74061, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 1745, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 85828, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 29588, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 58543, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 13540, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 30033, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 78436, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '70058024', 67475, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 36337, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 17174, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 14500, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 7398, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 60190, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 9632, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 34424, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 850, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 93939, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 34531, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 52980, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 59223, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 37864, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 29961, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 29581, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 54741, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 2596, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 92707, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 66282, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 28009, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 55008, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 28875, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 81269, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 57829, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 49097, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 67287, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 27987, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 34275, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 32778, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 49960, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 75273, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 72891, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 96386, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 67851, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 95300, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 82224, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 99431, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 83663, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 76911, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 59423, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 32658, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '70058024', 12499, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 3625, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 42349, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 13554, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 66107, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 51148, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 5740, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 14156, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 72811, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 80340, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 86073, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 4105, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 23287, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 6563, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 13661, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 85832, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 85547, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 80041, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 66896, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 61068, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 34831, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 40727, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 57137, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 6878, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 29753, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 61707, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 67978, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 84867, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 28787, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 81262, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 10160, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 93170, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 62753, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 87816, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 20084, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 9647, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 9197, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 64762, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 1071, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 15589, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 94384, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 74496, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 48576, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 50492, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 18924, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 234, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 3258, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 98106, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 57842, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 59542, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 42812, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 62499, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 36025, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 49002, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 74213, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 23275, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 67793, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 62059, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 32722, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 97242, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 30674, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 60123, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 47978, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 35458, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 60893, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 50095, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 89421, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 2598, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 44638, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '70058024', 69689, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 22108, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 36379, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 78877, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 36965, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 4176, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 59403, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 87224, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 12995, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 24437, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 97151, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 93966, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 15031, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 42520, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 32573, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 39516, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 81261, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 15352, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 27833, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 10324, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 97816, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 85114, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 68521, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 20239, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 88165, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 406, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 82508, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 58936, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 87890, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 69356, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 94262, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 28209, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 2981, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 75115, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 27369, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 41543, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 36254, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 80952, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 84016, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 868, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 10888, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 40160, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 79029, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 65856, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 20636, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 20939, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 13052, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 67877, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 5969, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 36507, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 37827, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 12497, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 91801, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 45756, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 80567, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 99646, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 27290, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 27683, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 92065, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 39355, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 42462, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 73039, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 77755, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 50957, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 40493, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 21809, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 56827, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 51236, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 62909, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 1830, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 31056, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 60773, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 80402, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 46373, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 73180, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 99546, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 25288, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 88269, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 62813, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 23587, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 68939, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 64490, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 29704, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 98088, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 70503, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 65407, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 20521, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 60118, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 33003, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 36945, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 65008, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 23963, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 63104, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 3709, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 82275, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 561, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 51096, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 2080, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 41900, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 73163, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 70004, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 36343, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 65754, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 16830, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 1516, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 69713, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 57828, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 84842, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '70058024', 13929, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 23946, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 91903, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 6295, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 74748, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 82843, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 10910, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 87617, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 44149, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 57103, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 60442, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 46686, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 13615, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 78473, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 84098, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 53798, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 55162, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 72757, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 25135, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 72552, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 57072, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 77814, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 37621, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 76410, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 8450, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 46558, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 59666, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 37296, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 99418, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 75162, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 37685, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 53993, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 60424, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 92506, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 16551, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 8463, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 15371, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '70058024', 31454, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 96928, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 40579, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 40584, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 99407, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 47066, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '70058024', 21108, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 27661, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 18508, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 79695, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 84437, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 8643, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '70058024', 24196, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 97790, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 82109, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 94300, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 29015, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 82816, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 27914, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 87264, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 88055, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 19012, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 1069, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 15673, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 65871, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 2227, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 69996, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 29136, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 22765, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 52141, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 95037, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '70058024', 78788, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 15761, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 14023, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 68264, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 5888, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 39634, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 42412, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '70058024', 36997, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 39105, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 25114, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 99199, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 7170, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 477, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 26159, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 65034, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 34401, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 7596, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 95019, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 32274, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 48273, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 3180, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 90880, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 94375, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 93518, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 8385, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 34364, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 63735, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 89801, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 43112, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 4432, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '70058024', 12326, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 64668, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 62037, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 17644, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 80287, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 52005, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 30532, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 43001, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '70058024', 91260, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 72397, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 47084, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 26379, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 25046, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 40227, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '70058024', 62157, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 16025, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 32749, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 15352, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 49245, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 58867, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 55138, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 14263, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 21552, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 88678, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '70058024', 90573, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 78469, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 3816, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 10457, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 91673, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '70058024', 35982, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '70058024', 91086, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 14541, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 32033, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 3231, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 85412, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 85873, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 70165, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 67913, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 70532, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 84569, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 38582, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 61426, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 55792, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 21785, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 85578, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '70058024', 71355, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '70058024', 28507, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '70058024', 8653, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '70058024', 28734, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '70058024', 97622, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 63452, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '70058024', 94010, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '70058024', 79651, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '70058024', 34591, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 84879, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 27085, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '70058024', 42726, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 86605, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 1327, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 9205, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 32465, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 96001, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 37460, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '70058024', 24787, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 73271, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 62872, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 39214, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 22325, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 99209, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 98275, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '70058024', 13402, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 75663, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '70058024', 86414, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 18284, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 63322, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 41968, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '70058024', 84888, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 29529, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 49201, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 81751, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '70058024', 72653, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '70058024', 32822, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '70058024', 77460, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '70058024', 99812, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '70058024', 19151, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70058024', 26655, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '70058024', 26633, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 23148, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 39671, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '70058024', 16427, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 36205, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '70058024', 26998, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 83139, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '70058024', 86567, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '70058024', 57833, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 22112, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 55977, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '70058024', 1462, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '70058024', 50886, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 74656, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '70058024', 35628, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '70058024', 30134, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 75749, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '70058024', 6810, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '70058024', 93842, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 73059, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '70058024', 19887, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '70058024', 28855, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '70058024', 59988, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 92784, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 9702, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '70058024', 1337, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 15670, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '70058024', 79735, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '70058024', 58172, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70058024', 62282, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '70058024', 63109, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '70058024', 45595, 31, '1');
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
