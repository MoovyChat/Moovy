import { MigrationInterface, QueryRunner } from 'typeorm';

export class fakeComments1665464609605 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 92070, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 46889, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 66146, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 18176, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 54502, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 38884, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 2194, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 94290, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 73700, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 6187, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 45032, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 95720, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 95205, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 14659, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 20454, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 85269, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 93372, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 45258, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 76141, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 94694, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 5623, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 30063, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 1670, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 64682, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 54084, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 93672, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 44968, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 87295, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 10996, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 74550, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 19774, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 99795, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 2666, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 78695, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 89569, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 57647, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 148, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 8945, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 11607, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 58284, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 54306, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 82388, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 85980, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 44141, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 48655, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 21068, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 55468, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 9093, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 45883, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 44804, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 40562, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 49579, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 63576, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 41752, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 24417, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 88046, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 29125, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 73581, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 7933, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 19807, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 1263, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 63675, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 91195, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 87396, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 33699, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 34602, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 67169, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 11373, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 16115, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 51601, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 39984, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 33989, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 69829, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 64634, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 54516, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 92061, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 67597, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 91460, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 56883, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 40089, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '81507232', 9282, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 12335, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 42048, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 81765, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 94893, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 48532, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 68391, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 40892, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 50210, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 65935, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 63625, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 65340, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 45116, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 87234, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 24150, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 96338, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 60844, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 18858, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 58725, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 61692, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 6651, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 28251, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 71057, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 871, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 39779, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 66691, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 78795, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 84679, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 36956, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 7804, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 34449, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 67827, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 27333, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 7244, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 57729, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 63397, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 62518, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 14307, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 18905, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 91594, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 69872, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 60188, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 88108, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 34950, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 77990, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 53481, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 82325, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 32582, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 45387, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 91032, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 78226, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 43266, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '81507232', 78143, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 46305, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 86886, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 79637, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 38545, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 27169, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 46814, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 35816, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 90772, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 92437, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 13535, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 18020, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 61156, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 15554, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 18913, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 37965, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 75200, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 49136, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 1041, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 12610, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 90458, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 37734, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 95150, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 22533, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 63739, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 74409, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 58690, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 87976, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 23653, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 2058, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 59544, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 45083, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 53850, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 21911, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 14541, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 52051, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 6289, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 84777, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 63014, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 52020, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 5285, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 98425, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 88851, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 64671, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 83383, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 35367, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 84769, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 33260, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 25821, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 13015, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 55572, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 83062, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 24014, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 61778, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 35433, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 3755, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 50981, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 9491, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 6472, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 51302, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 10150, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 16943, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 48157, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 80691, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 88545, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 18771, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 13669, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 30526, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 93589, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 6308, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 92237, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 33379, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 98415, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 30455, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 23010, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 1991, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '81507232', 59972, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 55379, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 41040, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 59678, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 48342, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 55836, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 22597, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 38497, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 77475, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 33368, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 11315, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 83616, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 92266, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 29804, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 20074, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 70721, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 19081, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 75756, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 11806, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 80011, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 84977, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 73589, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 1412, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 29210, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 62740, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 41247, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 53318, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 80425, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 7635, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 30752, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 25278, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 16640, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 57880, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 62154, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 2438, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 13405, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 5551, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 87771, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 93029, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 98385, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 59868, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 20955, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 96270, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 28671, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 73003, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 15512, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 84431, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 63169, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 50525, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 78426, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 23091, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 61396, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 10933, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 40661, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 16707, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 619, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 99406, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 68129, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 63180, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 87708, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 24164, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 49786, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 70610, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 41970, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 25057, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 2172, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 33781, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 69955, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 9100, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 69844, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 47845, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 31315, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 27800, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 72109, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 98296, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 76503, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 25800, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 7912, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 37170, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 8453, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 93928, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 97967, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 91134, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 27811, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 29981, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 57605, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 73270, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 12215, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 84784, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 19931, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 65423, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 11448, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 89523, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 80561, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 925, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 23451, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 85818, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 31423, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 10492, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 10465, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 86365, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 17035, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 67524, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 54191, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 57874, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 35334, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 1531, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 91801, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 1432, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 57687, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 23755, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 87423, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 70193, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 5880, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 70007, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 68213, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 54074, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 8145, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 29709, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 91638, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 21579, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 42683, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 17601, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 55352, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 36529, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 97834, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 31818, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 65002, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 40804, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 46187, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 18932, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 40261, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 26015, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 66966, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 69, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 91390, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 58830, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 55057, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 96884, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 21138, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 46710, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 96882, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 13541, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 86621, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 25230, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 84451, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 39169, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 47511, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 54976, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 99479, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 23969, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 74554, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 1043, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 24805, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 60430, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 48483, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 38294, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 97007, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 31629, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 69082, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 39773, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 43674, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 16998, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 41519, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 95232, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 63927, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 67938, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 17429, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 82312, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 3729, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 65379, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 9389, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 50842, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 38694, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 14658, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 15996, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 86813, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 78858, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 65544, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 73813, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 51909, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 97863, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 95001, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 2551, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 96740, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 45453, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 40166, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 59024, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 70113, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 39045, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 97537, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 38973, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 8827, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 7175, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 91132, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 59985, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 45009, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 68382, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 65067, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 66358, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 31108, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 15029, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 98263, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 47404, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 52914, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 27400, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 89861, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 37649, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 99494, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 534, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 98135, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 68751, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 78286, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 39682, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 17312, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 3283, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 63516, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 26561, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 1236, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 62733, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 82961, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 70961, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 61707, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 79310, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 57264, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 15007, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 38111, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 86385, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 45137, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 89124, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 6740, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 44155, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 76486, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 98289, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 72657, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 67438, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 19243, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 60494, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 67440, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 57539, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 56147, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 35830, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 99295, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 4418, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 8493, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 82952, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 85973, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 9858, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 98776, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 6753, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 46395, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 66577, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 24704, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 5391, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 45892, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 97734, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 51343, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 96423, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 46270, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 49932, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 60650, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 6148, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 4009, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 21093, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 50329, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 44469, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 16382, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 79869, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 93633, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 24740, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 65145, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 42142, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 61492, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 21714, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 58259, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 97533, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 19558, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 78106, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 91577, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 5461, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 38583, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 10507, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 56684, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 44342, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 45894, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 2132, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 5492, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 18258, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 35540, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 64055, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 87188, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 43903, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 1181, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 12988, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 46566, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 17782, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 34340, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 30939, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 85305, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 16167, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 81031, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 74118, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 37496, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 95491, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 80917, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 6353, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 74777, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 11872, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 47556, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 70402, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 11849, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 26133, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 82817, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 82448, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 12520, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 78586, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 8635, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 14532, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 60521, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 27727, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 71417, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 31951, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 71760, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 59852, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 99248, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 94246, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 40503, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 46708, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 44960, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 40488, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 47369, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 77811, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 2230, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 69601, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 25944, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 55871, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 7031, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 29371, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 22939, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 63374, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 50692, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 88063, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 15364, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 48334, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 37323, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 66787, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 83863, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 9496, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 41426, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 20583, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 81147, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 42340, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 31599, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 88341, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 79125, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 41720, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 53326, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 23813, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 14228, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 42885, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 28951, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 41285, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 93786, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '81507232', 72421, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 68988, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 36935, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 99795, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 93370, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 59722, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 3034, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 39522, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 437, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 74549, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 31810, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 99823, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 61427, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 36825, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 4379, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 24535, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 8150, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 78295, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 97490, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 94159, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 43333, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 28433, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 89549, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 26179, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 82527, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 6981, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 92917, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 3053, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 6895, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 47572, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 44249, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 62314, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 72861, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 62964, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 2435, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 14944, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 49588, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 36010, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 20340, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 90349, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 6617, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 86525, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 74686, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 63742, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 43097, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 78855, 31, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 64179, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 6092, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 95404, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 64277, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 42902, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 92894, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 90266, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 6608, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 71355, 23, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 21172, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 16578, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 90420, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 99360, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 57039, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 63124, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 85459, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 43967, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 28064, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 352, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 69858, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 84919, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 12314, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 9529, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 65, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 65678, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 87434, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 55438, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 19489, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 25876, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 1395, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 52170, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 25676, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 27687, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 74989, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 88998, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 97646, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 15853, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 89556, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 2896, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 69729, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 14405, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 73403, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 73252, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 35686, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 98910, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 35871, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 89933, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 30351, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 67822, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 21569, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 7618, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 10195, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 40587, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 59799, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 26026, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 59176, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 26636, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 87127, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 65498, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 42003, 72, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 79759, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 52462, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 9472, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 86110, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 91, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 13368, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 87984, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 51339, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 93599, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 44830, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 17303, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 69868, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 28538, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 49821, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 27327, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 44335, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 96150, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 99016, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 33673, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 25330, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 27261, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 70153, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 2305, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 70286, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 8192, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 19478, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 32168, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 53658, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 21438, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 14474, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 77415, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 85394, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 29207, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 16995, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 66624, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 57013, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 99067, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 41583, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 44353, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 17627, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 48256, 60, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '81507232', 38543, 3, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 1037, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 451, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 33537, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 36848, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 55028, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 72269, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 53372, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 57533, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 19721, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 64428, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 72173, 64, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 94675, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 82900, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 93304, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 84706, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 97129, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 66610, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 57368, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 80072, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 60139, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 84083, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 75117, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 58542, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 94512, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 53057, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 87043, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 81991, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 69293, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 80467, 49, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 81241, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 42656, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 81446, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 39042, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 56588, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 79702, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 8432, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 76857, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 32947, 63, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 38492, 35, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 2475, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 98676, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 34965, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 43478, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 79663, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 92728, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 27301, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 32914, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 74650, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 3139, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 34, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 63155, 44, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 50254, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 35361, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 43768, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 82131, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 86572, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 83580, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 70765, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 15224, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 90243, 25, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '81507232', 42915, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 63621, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 10211, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 34359, 48, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 85470, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 79336, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 60472, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 33653, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 28635, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 63835, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 49740, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 30410, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 81135, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 27545, 27, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 2315, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 94150, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 76891, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 63156, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 72319, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 77642, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 89257, 83, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 34048, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 33557, 95, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 53284, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 22894, 58, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 4807, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 93998, 20, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 89972, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 1454, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 27227, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 83690, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 32398, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 64140, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 74393, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 66717, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 91093, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 87323, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 10519, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 24613, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 26779, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 58224, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 53860, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 70197, 53, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 75759, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 96361, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 40753, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 60528, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 42050, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '81507232', 18708, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 8621, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 49138, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 42357, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 52557, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 88672, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 39151, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 21618, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 91818, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 25387, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 73636, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 64919, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 37647, 69, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 32163, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 76617, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 34727, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 44220, 100, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 7682, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 11365, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 97945, 86, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 75865, 1, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 32494, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 57680, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '81507232', 28296, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 80714, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 10318, 81, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 25325, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 513, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 71755, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 35754, 36, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 88189, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 53393, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 69058, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 82948, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 99016, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 28767, 67, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 63329, 75, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 80429, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 3504, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 47547, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 95369, 29, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 145, 85, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '81507232', 81726, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 14505, 43, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 8923, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 83134, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 61104, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 63668, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 41185, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 58482, 11, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 72293, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 94638, 56, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 29049, 59, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 93752, 9, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 40365, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 84509, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '81507232', 58651, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 44131, 97, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 76500, 24, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 7781, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 99123, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '81507232', 94664, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 6791, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '81507232', 84972, 6, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 77426, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 61822, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 25188, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 92993, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 42999, 19, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '81507232', 78441, 50, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 209, 87, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 24166, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 85762, 14, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 22356, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 82640, 38, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 35657, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 65510, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 74875, 74, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '81507232', 38804, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 84911, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 29029, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 77807, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 81335, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 93772, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '81507232', 63611, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 8638, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 21722, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 98278, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 74979, 45, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 1245, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 38220, 73, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '81507232', 40149, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 77770, 52, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '81507232', 82889, 88, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 91962, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '81507232', 93819, 55, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 37731, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 50970, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 1525, 7, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 18598, 96, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 41196, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 77787, 79, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '81507232', 17137, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '81507232', 16475, 21, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 51585, 70, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 27746, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 7288, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 72090, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 36127, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '81507232', 89237, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 36597, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '81507232', 96950, 12, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 64411, 98, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 92893, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 1524, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 51999, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 11354, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '81507232', 42906, 33, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '81507232', 13833, 17, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '81507232', 85497, 61, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '81507232', 64504, 37, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 97292, 54, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 65981, 13, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 17968, 80, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 52854, 22, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 6502, 65, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '81507232', 35817, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 88015, 10, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '81507232', 76920, 26, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 78081, 93, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 17635, 68, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '81507232', 59761, 78, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '81507232', 1673, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 28125, 34, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 9606, 57, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 76482, 94, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '81507232', 19020, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '81507232', 51535, 90, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '81507232', 97435, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '81507232', 86732, 2, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 51012, 91, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '81507232', 24695, 51, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 97607, 84, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '81507232', 61834, 82, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 26616, 77, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '81507232', 15127, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 43335, 62, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '81507232', 66990, 5, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 20955, 32, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 14857, 89, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 40998, 40, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Fusce consequat. Nulla nisl. Nunc nisl.', '81507232', 36908, 47, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 69519, 30, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 14174, 92, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '81507232', 74153, 4, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '81507232', 73558, 8, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '81507232', 21678, 71, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '81507232', 5091, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '81507232', 95361, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '81507232', 7977, 41, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '81507232', 30856, 76, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '81507232', 96257, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '81507232', 39383, 39, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '81507232', 22407, 16, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '81507232', 20284, 28, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 16224, 99, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '81507232', 28288, 66, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '81507232', 79958, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '81507232', 73336, 15, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 40266, 18, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '81507232', 17019, 42, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '81507232', 26780, 46, '1');
insert into comment ("commentedUserUid", message, "movieMid", "likesCount", "repliesCount", "platformId") values ('4', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '81507232', 29040, 94, '1');

      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log(queryRunner);
  }
}
