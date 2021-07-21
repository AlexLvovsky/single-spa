import { GridDataService } from "./grid-data.service";
import { of } from "rxjs";

let httpClientSpy: { get: jasmine.Spy };
let gridDataService: GridDataService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  gridDataService = new GridDataService(httpClientSpy as any);
});

it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
  const serverUsers: any[] =
    [{id: 1, name: 'A', username: 'userA'}, {id: 2, name: 'B', username: 'userB'}];
  const expectedUsers: any[] =
    [{id: 1, name: 'A', userName: 'userA'}, {id: 2, name: 'B', userName: 'userB'}];

  httpClientSpy.get.and.returnValue(of(serverUsers));

  gridDataService.getUsers().subscribe(
    users => {
      expect(users).toEqual(expectedUsers, 'expected heroes');
      done();
    },
    done.fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
