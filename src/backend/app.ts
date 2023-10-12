import { invoke } from '@tauri-apps/api';
import { restic } from './restic';

export namespace resticApp {

    export function defaultRepoLocation(): Promise<restic.Location> {
        return invoke<restic.Location>("default_repo_location");
    }

    export function openFileOrUrl(arg1: string): Promise<void> {
        return invoke<void>("open_file_or_url", { arg1 });
    }

    export function openRepository(location: restic.Location): Promise<void> {
        return invoke<void>("open_repository", { location });
    }

    export function getSnapshots(): Promise<Array<restic.Snapshot>> {
        return invoke<Array<restic.Snapshot>>("get_snapshots", { location });
    }

    export function getFiles(snapshotId: string, path: string): Promise<Array<restic.File>> {
        return invoke<Array<restic.File>>("get_files", { snapshotId, path });
    }

    export function dumpFile(snapshotId: string, file: restic.File): Promise<string> {
        return invoke<string>("dump_file", { snapshotId, path: file });
    }

    export function dumpFileToTemp(snapshotId: string, file: restic.File): Promise<string> {
        return invoke<string>("dump_file_to_temp", { snapshotId, path: file });
    }

    export function restoreFile(snapshotId: string, file: restic.File): Promise<string> {
        return invoke<string>("restore_file", { snapshotId, path: file });
    }

}